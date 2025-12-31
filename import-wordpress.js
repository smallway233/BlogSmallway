import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import TurndownService from 'turndown';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to the XML file provided by user
const absoluteXmlPath = "f:\\桌面\\vitepress-theme-curve\\WordPress.2025-12-31.xml";
const outputDir = path.resolve(__dirname, 'docs', 'blog');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function main() {
    if (!fs.existsSync(absoluteXmlPath)) {
        console.error(`File not found: ${absoluteXmlPath}`);
        return;
    }

    console.log(`Reading XML from: ${absoluteXmlPath}`);
    const xmlData = fs.readFileSync(absoluteXmlPath, 'utf-8');
    const parser = new xml2js.Parser();
    
    try {
        const result = await parser.parseStringPromise(xmlData);
        if (!result.rss || !result.rss.channel || !result.rss.channel[0]) {
            console.error('Invalid WordPress XML format.');
            return;
        }

        const channel = result.rss.channel[0];
        const items = channel.item;

        if (!items) {
            console.log('No items found in XML.');
            return;
        }

        console.log(`Found ${items.length} total items. Processing...`);

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        let count = 0;
        for (const item of items) {
            const postType = item['wp:post_type']?.[0];
            const status = item['wp:status']?.[0];

            if (postType === 'post' && status === 'publish') {
                processPost(item);
                count++;
            }
        }

        console.log(`Successfully imported ${count} posts.`);

    } catch (err) {
        console.error('Error parsing XML:', err);
    }
}

function processPost(item) {
    const title = item.title[0];
    let contentHtml = item['content:encoded']?.[0] || '';
    const date = item['wp:post_date'][0];
    let slug = item['wp:post_name'][0];
    
    if (slug) {
        try {
            slug = decodeURIComponent(slug);
        } catch (e) {
            // ignore error
        }
    }

    if (!slug) {
        slug = title.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/^-+|-+$/g, '');
        if (!slug) slug = `post-${Date.now()}`;
    }


    // Categories and Tags
    const categories = [];
    const tags = [];
    if (item.category) {
        for (const cat of item.category) {
            const domain = cat.$.domain;
            const name = cat._;
            if (domain === 'category' && name !== 'Uncategorized' && name !== '所有文章') {
                categories.push(name);
            } else if (domain === 'post_tag') {
                tags.push(name);
            }
        }
    }

    // Convert content
    // Basic fix for some WP quirks before markdown conversion if needed
    const markdown = turndownService.turndown(contentHtml);

    // Comments
    let commentsSection = '';
    if (item['wp:comment']) {
        const comments = item['wp:comment'].filter(c => c['wp:comment_approved'][0] === '1');
        if (comments.length > 0) {
            commentsSection = '\n\n<!-- 历史评论 -->\n## 评论\n\n';
            for (const comment of comments) {
                const author = comment['wp:comment_author'][0];
                const commentDate = comment['wp:comment_date'][0];
                const commentContent = comment['wp:comment_content'][0];
                
                // Simple cleanup of comment content
                const cleanContent = commentContent.replace(/<[^>]+>/g, '').trim();
                
                commentsSection += `**${author}** *(${commentDate})*:\n\n> ${cleanContent.replace(/\n/g, '\n> ')}\n\n`;
            }
        }
    }

    // Frontmatter
    // JSON.stringify handles escaping quotes in title
    const frontmatter = [
        '---',
        `title: ${JSON.stringify(title)}`,
        `createTime: ${date.replace(' ', ' ').slice(0, 19)}`,
        `permalink: /blog/${slug}/`,
        categories.length > 0 ? `categories:\n${categories.map(c => `  - ${c}`).join('\n')}` : null,
        tags.length > 0 ? `tags:\n${tags.map(t => `  - ${t}`).join('\n')}` : null,
        '---'
    ].filter(Boolean).join('\n');

    const fileContent = `${frontmatter}\n\n${markdown}${commentsSection}`;
    
    const filePath = path.join(outputDir, `${slug}.md`);
    
    try {
        fs.writeFileSync(filePath, fileContent);
        console.log(`Saved: ${slug}.md`);
    } catch (e) {
        console.error(`Failed to save ${filePath}:`, e);
    }
}

main();
