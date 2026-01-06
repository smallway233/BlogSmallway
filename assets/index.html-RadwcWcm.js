import{_ as n,c as a,a as e,o as i}from"./app-xjrptliG.js";const l={};function p(t,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>学习Vue的总结</p><h1 id="通过vue操作echarts" tabindex="-1"><a class="header-anchor" href="#通过vue操作echarts"><span>通过Vue操作echarts</span></a></h1><h2 id="_1-首先创建一个容器" tabindex="-1"><a class="header-anchor" href="#_1-首先创建一个容器"><span>1.首先创建一个容器</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&lt;div ref=&quot;chart&quot; style=&quot;width: 400px; height: 400px&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><em>此时创建了一个长宽都为400px的容器，且容器名为&#39;chart&#39;</em></p><h2 id="_2-导入echarts" tabindex="-1"><a class="header-anchor" href="#_2-导入echarts"><span>2.导入echarts</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>import * as echarts from &quot;echarts&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-在钩子-methods-中定义函数" tabindex="-1"><a class="header-anchor" href="#_3-在钩子-methods-中定义函数"><span>3.在钩子（methods()）中定义函数</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>methods: {</span></span>
<span class="line"><span>    // 引用钩子</span></span>
<span class="line"><span>    initChart() {</span></span>
<span class="line"><span>      // 定义函数</span></span>
<span class="line"><span>      const my_charts = echarts.init(this.$refs.chart);</span></span>
<span class="line"><span>      // 实例化echarts表</span></span>
<span class="line"><span>      const option = {</span></span>
<span class="line"><span>        title: {</span></span>
<span class="line"><span>          text: &quot;年龄&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        tooltip: {},</span></span>
<span class="line"><span>        xAxis: {</span></span>
<span class="line"><span>          data: [&quot;李泽阳&quot;, &quot;赵敏&quot;, &quot;赵中豪&quot;, &quot;程倩秋&quot;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        yAxis: {},</span></span>
<span class="line"><span>        series: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            name: &quot;销量&quot;,</span></span>
<span class="line"><span>            type: &quot;bar&quot;,</span></span>
<span class="line"><span>            data: [20, 21, 21, 22],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>      // 写入配置</span></span>
<span class="line"><span>      my_charts.setOption(option);</span></span>
<span class="line"><span>      // 将配置放入图表中展示</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在钩子中调用-函数" tabindex="-1"><a class="header-anchor" href="#在钩子中调用-函数"><span>在钩子中调用 函数</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>mounted() {</span></span>
<span class="line"><span>    this.initChart();</span></span>
<span class="line"><span>    // 调用函数</span></span>
<span class="line"><span>  },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整的代码为" tabindex="-1"><a class="header-anchor" href="#完整的代码为"><span>完整的代码为</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div ref=&quot;chart&quot; style=&quot;width: 400px; height: 400px&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- 创建一个长宽为400px的容器 --&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import * as echarts from &quot;echarts&quot;;</span></span>
<span class="line"><span>// 导入ecarts</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    // 引用钩子</span></span>
<span class="line"><span>    initChart() {</span></span>
<span class="line"><span>      // 定义函数</span></span>
<span class="line"><span>      const my_charts = echarts.init(this.$refs.chart);</span></span>
<span class="line"><span>      // 实例化echarts表</span></span>
<span class="line"><span>      const option = {</span></span>
<span class="line"><span>        title: {</span></span>
<span class="line"><span>          text: &quot;年龄&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        tooltip: {},</span></span>
<span class="line"><span>        xAxis: {</span></span>
<span class="line"><span>          data: [&quot;李泽阳&quot;, &quot;赵敏&quot;, &quot;赵中豪&quot;, &quot;程倩秋&quot;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        yAxis: {},</span></span>
<span class="line"><span>        series: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            name: &quot;销量&quot;,</span></span>
<span class="line"><span>            type: &quot;bar&quot;,</span></span>
<span class="line"><span>            data: [20, 21, 21, 22],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>      // 写入配置</span></span>
<span class="line"><span>      my_charts.setOption(option);</span></span>
<span class="line"><span>      // 将配置放入图表中展示</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    this.initChart();</span></span>
<span class="line"><span>    // 调用函数</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行后的结果如下" tabindex="-1"><a class="header-anchor" href="#运行后的结果如下"><span><strong>运行后的结果如下</strong></span></a></h2><p><img src="https://smallway.oss-cn-beijing.aliyuncs.com/{Y}{M}{D}-{rand}image-20230427180726565.png" alt=""></p><h2 id="评论" tabindex="-1"><a class="header-anchor" href="#评论"><span>评论</span></a></h2><p><strong>大哥</strong> <em>(2023-04-27 17:54:59)</em>:</p><blockquote><p>不错不错</p></blockquote><p><strong>大哥2号</strong> <em>(2023-04-28 08:47:09)</em>:</p><blockquote><p>what can i say，N B。</p></blockquote>`,20)])])}const c=n(l,[["render",p]]),r=JSON.parse(`{"path":"/blog/vue/","title":"vue入门总结","lang":"zh-CN","frontmatter":{"title":"vue入门总结","createTime":"2023-04-27T17:11:30.000Z","permalink":"/blog/vue/","categories":["大数据学习"],"description":"学习Vue的总结 通过Vue操作echarts 1.首先创建一个容器 此时创建了一个长宽都为400px的容器，且容器名为'chart' 2.导入echarts 3.在钩子（methods()）中定义函数 在钩子中调用 函数 完整的代码为 运行后的结果如下 评论 大哥 (2023-04-27 17:54:59): 不错不错 大哥2号 (2023-04-2...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue入门总结\\",\\"image\\":[\\"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230427180726565.png\\"],\\"dateModified\\":\\"2025-12-31T10:10:50.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://blog.smallway.top/blog/vue/"}],["meta",{"property":"og:site_name","content":"碎白的项目垃圾桶"}],["meta",{"property":"og:title","content":"vue入门总结"}],["meta",{"property":"og:description","content":"学习Vue的总结 通过Vue操作echarts 1.首先创建一个容器 此时创建了一个长宽都为400px的容器，且容器名为'chart' 2.导入echarts 3.在钩子（methods()）中定义函数 在钩子中调用 函数 完整的代码为 运行后的结果如下 评论 大哥 (2023-04-27 17:54:59): 不错不错 大哥2号 (2023-04-2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230427180726565.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-31T10:10:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-31T10:10:50.000Z"}]]},"readingTime":{"minutes":1.19,"words":357},"git":{"createdTime":1767175850000,"updatedTime":1767175850000,"contributors":[{"name":"小白nbfan","username":"","email":"","commits":1,"avatar":"https://gravatar.com/avatar/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855?d=retro"}]},"autoDesc":true,"filePathRelative":"blog/vue.md","headers":[],"categoryList":[]}`);export{c as comp,r as data};
