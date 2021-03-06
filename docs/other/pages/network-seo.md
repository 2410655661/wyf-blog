---
layout: Page
title: '聊聊我们说的网站优化'
description: '前言：网站打开的快慢，在一定程度上影响着用户的流失率。据不完全统计网站打开时间超过3s，就有将近40%的用户会选择关闭。因此，加载速度也成为了，搜索引擎排序中的一项因素。让我们一起看看有哪些优化点是我们值得关注的！'
tags: 
  - web
  - SEO优化
---

::: slot perface
  网站打开的快慢，在一定程度上影响着用户的流失率。据不完全统计网站打开时间超过3s，就有将近40%的用户会选择关闭。因此，加载速度也成为了，搜索引擎排序中的一项因素。让我们一起看看有哪些优化点是我们值得关注的！
:::

  从用户点击网站，到给用户呈现画面的过程，整体花了5.91s。其实这是非常糟蹋的加载速度了！那么有什么方法可以优化呢，让网站更快打开呢？
  
  其实想要优化网站的打开速度，就应该从网站慢的原因入手。那就基本得了解从输入url到用户看到网页这个过程都发生了什么？

  大概流程如下：
        
  1. 用户输入url 

  2. 浏览器对域名进行dns解析，获取到服务器ip地址。

  3. 客户端（浏览器）与服务器建立tcp连接，三次握手

  4. 握手成功后，发送请求，服务器处理相关逻辑，并把对应的数据返回给客户端（浏览器）

  5. 浏览器接受到数据，开始解析数据（HTML）

  6. DOM树构建、CSS解析 Style Rules(CSS树)

  7. DOM树与CSS树生成呈现树，然后绘制页面，呈现给用户。（当然这里还有许多细节，暂时省略... 有兴趣朋友可自行了解）

  可能有人还是会问：就算我看懂了这个流程，可是我还是不知道怎么优化啊？到底要怎么操作呢？

  别着急，在段亮认为，网站优化可以分为以下几部分：

### 一、网络优化

1. 打开谷歌的debug调试工具 (F12)会弹出一个类似这样的窗口：然后找到waterfall选项，有个进度条的东西。

    1. DNS Lookup DNS查询时间 [深绿色]

    2. Initial connection TCP连接消耗时间 [橙色]

    3. SSL SSL/TLS完成握手时间 [紫色]

    4. TTFB 是网络请求被发起到服务器返回第一个字节所花费的时间 [绿色]

    5. Content Download 文档下载时间 [蓝色]

2. 那么知道上述几个参数有什么含义呢? 比如：如果你发现网站资源加载非常多，拖慢了网站加载时间，怎么解决呢？

    1. 可以合并资源，减少http请求。 比如：js、css合并，小图片合成雪碧图... 

    2. 分域名加载资源，突破浏览器限制（因为在同源资源加载的情况下，浏览器最多允许同时6个请求加载）或者利用HTTP2.0多路复用

    3. 减少DNS lookup时间，提前解析DNS 比如：html head中添加link标签：
    
### 二、 前端优化
1. 如果追求首屏优化，比如：电商这种行业。可以把首屏css样式写入head头中，减少http请求次数，让首屏更快的渲染。淘宝为例：


2. 静态资源压缩打包走cdn，减少主服务器的压力，然资源加载的更换。（因为cdn公司的服务器节点比你服务器更加靠近用户）

3. 根据具体情况，把js设置异步延迟加载，减少阻止dom渲染时间。比如
DOM构建完成加载

    具体细节优化，可以看这篇文章 web前端优化，你知道多少？

### 三、服务端优化

  1. 开启服务端缓存，减少服务器压力。

  2. 开启gzip压缩，减少资源大小，传输更快。

  3. 数据做好缓存和优化，减少服务端IO操作

  写在最后：当然网站的优化有很多方面，但这篇文章只是从技术的角度去谈，并未结合SEO和营销的角度去讲解。往往我们很多时候，只是看到事物的表面，对于底层和细节而被忽略。出了问题，一定得要从根源入手，才能解决根本问题。
