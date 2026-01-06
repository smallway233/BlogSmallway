---
title: "移植Hexo中的一个小工具——根据IP显示地址及作者感言"
createTime: 2024-02-13 18:04:04
permalink: /blog/hexo-tool-ip-address/
categories:
  - 大数据学习
---

这几天闲来无事，逛友人博客的时候发现了一个较为羡慕的功能

![image-20240213172800600](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240213172800600.png)

于是就向友人了解了这个小功能

![image-20240213172925315](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240213172925315.png)

但是他使用的是Hexo博客我却是wordpress

好在Hexo是基于Node.js的博客框架。所以我们就可以把这个小工具移植到wordpress里

说干就干！先要来源代码！

![image-20240213173503933](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240213173503933.png)

好哇！一开始就给我了一个下马威！

![image-20240213173612295](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240213173612295.png)

1.  这个saveToLocal是个什么方法？
2.  这又是个什么请求方式？为什么不直接请求接口呢？

（各位看官谅解啊，前端咱懂得不是那么多）

1.  后来经过友人提点，才意识到这个saveToLocal可能是保存数据的方法——那就用localstorage平替！
2.  把这个请求代码扔给chatgpt才了解到这是jsonp的请求方式，目的是为了解决跨域问题！（于是花了一晚上的时间去了解跨域）

最后的最后！我完美的移植了这个在Hexo的小工具，具体实现请看下方。

但是唯一美中不足的一点在于，我无法找到这个小工具的原作者。若该原作者看到这篇帖子！可以联系我。我将会标注该工具的来源。

![image-20240213172622655](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240213172622655.png)

最后！我将给出该工具的使用方法。理论上适用于所有wordpress主题。

首先在腾讯地图开放平台申请一个API，用于获取地址。

其次填入代码

![image-20240213175430927](https://smallway.oss-cn-beijing.aliyuncs.com/image-20240213175430927.png)

在你想要显示这个小工具的地方填入以下代码

```html
<div id="welcome-info">
<script>
//在这里填入刚才的js代码    
</script>
```

即可显示该小工具！

<!-- 历史评论 -->
## 评论

**Anonymous** *(2024-02-21 12:42:18)*:

> 熊猫烧香 i i i

**Dominic** *(2024-02-21 12:45:47)*:

> 我的框架是Halo。。用Hexo的时候顺带扒拉了几个源码。还有怎么不写你被跨域折磨的那些日子

