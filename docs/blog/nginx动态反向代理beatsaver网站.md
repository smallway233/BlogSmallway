---
title: "Nginx动态反向代理BeatSaver网站"
createTime: 2024-01-25 14:14:46
permalink: /blog/nginx-reverse-proxy-beatsaver/
---

前言

使用nginx反向代理beatsaver网站，使得在国内能有良好的访问

首先。要使用反向代理，就得知道什么是反向代理，以下来自百度百科

反向代理服务器位于用户与目标服务器之间，但是对于用户而言，反向代理服务器就相当于目标服务器，即用户直接访问反向代理服务器就可以获得目标服务器的资源。同时，用户不需要知道目标服务器的地址，也无须在用户端作任何设定。反向代理服务器通常可用来作为Web加速，即使用反向代理作为Web服务器的前置机来降低网络和服务器的负载，提高访问效率。[\[1\]](%5B%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86_%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91%20\(baidu.com\)%5D\(https://baike.baidu.com/item/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86/7793488?fr=ge_ala\))

![f3a97233bcd61dc9c0aa51a279263560](https://smallway.oss-cn-beijing.aliyuncs.com/f3a97233bcd61dc9c0aa51a279263560.jpeg)

反向代理的主要功能是作为客户端与服务器之间的中介，将客户端的请求转发给后端服务器并将响应返回给客户端。它可以提供以下几个方面的功能：

1.  负载均衡：反向代理可以平衡多个后端服务器之间的负载，将客户端请求分配到不同的后端服务器，从而提高系统的整体性能和可靠性。
2.  安全保护：反向代理可以隐藏后端服务器的真实IP地址，提高服务器的安全性，同时可以通过各种协议（如SSL/TLS）来保障数据传输的安全性。
3.  缓存加速：反向代理可以缓存后端服务器的响应内容，当客户端再次请求相同的内容时，直接返回缓存的响应，从而提高响应速度和系统的整体性能。
4.  降低复杂度：反向代理可以在客户端与后端服务器之间进行协议转换，从而降低系统的复杂度，同时可以提供一些额外的功能，如请求日志、流量统计等。

本篇教程即使用反向代理的第三点功能。

在此我们首先对需要反代的API进行分析，[https://beatsaver.com/api/search/text/0](https://beatsaver.com/api/search/text/0) \[beatsaver.com\]为host \[/api/search/test/0\]为其路径，且0为动态路径（翻页嘛）。

步骤如下

1. 添加站点

![image-20240125134806135](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125134806135.png)

2. 设置网站的域名，PHP版本选择纯静态

![image-20240125135625045](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125135625045.png)

3. 点击设置

![image-20240125135717909](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125135717909.png)

4. 选择反向代理，添加反向代理

![image-20240125135808531](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125135808531.png)

5. 代理名称随便起，目标URL填写到 `https://beatsaver.com/api/search/text/`

::: tip
为什么没有0？往下看
:::

![image-20240125140238111](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125140238111.png)

6. 点击提交，点击配置文件

![image-20240125140409782](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125140409782.png)

![image-20240125140516843](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240125140516843.png)

具体解释如下：

*   `location ^~ /`：该配置指定了匹配的路径前缀为 `/`，即所有请求都会匹配到这个 location。
*   `rewrite ^/(.*)$ /api/search/text/$1 break;`：这条指令使用正则表达式将客户端请求的路径进行重写，将 `/` 后面的内容捕获为 `$1`，然后拼接到 `/api/search/text/` 后面。例如，如果客户端请求的路径是 `/songs/123`，经过重写后，路径变为 `/api/search/text/songs/123`。
*   `proxy_pass https://beatsaver.com;`：这条指令指定了转发请求的目标地址为 `https://beatsaver.com`，即所有匹配到该 location 的请求都会被转发到这个地址。
*   `proxy_set_header Host beatsaver.com;`：这条指令设置了转发请求时的 Host 头为 `beatsaver.com`，确保后端服务器可以正确处理该请求。

完成之后点击保存，访问刚才设置的域名即可成功反向代理。

<!-- 历史评论 -->
## 评论

**1** *(2024-03-22 15:19:17)*:

> 好
