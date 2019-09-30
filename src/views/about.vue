<template>
  <div>
    <div id="main" class="content">
      <div class="container">
        <section class="post_content">
          <div data-v-2facc67c="" class="article-content markdown-body show-text"><h1 id="data-0">为什么会开发这个个人博客？</h1><p>说到为什么会开发这个个人博客，愿意在上半年写了一个多人博客，<a href="https://www.byteblogs.com/">byteblogs</a> 但是总感觉缺少点什么，最后考虑一下准备写一个个人博客让个人博客的文章可以同步发到byteblogs上去，这个就形成一个圈子。只说不练假把式，于是就开工搞起了。我看了很多的个人博客大都是java + freemaker ，这个做主题是比较好更换的，但是局限性很大，不利于二次开发，而是改一下前端都需要整个重启费时费力。于是我就干脆直接搞个前后分离的博客。</p>
            <h1 id="data-12">这个博客有哪些值得亮点？</h1><ol>
              <li><p>前后端分离部署也是分开部署，这样改前端就不需要重新后端，一般来说不增加功能后端不会修改的。</p>
              </li>
              <li><p>后端代码只是博客的业务代码，代码结构更清晰明了，需要二次开发的小伙伴肯定喜欢的。</p>
              </li>
              <li><p>前端可以用任何语言开发，对于一些之后HTML + JS的小伙伴来说这样简直是福音啊，正在做到了面向接口开发，当然我也写了一个标准的<a href="http://helloblog.byteblogs.com/docs/api/">restful api文档</a>。</p>
              </li>
              <li><p>博客系统内部嵌套了博客搬家功能，可以把您在其他博客网站的内容搬到自己的个人博客系统中，对于我这样的懒人来说真的太实用了。</p>
              </li>
              <li><p>我们有一个社区，您可以在发布文章一键同步到我们的社区，让你的文章可以让更多小伙伴学习膜拜。</p>
              </li>
            </ol>
            <h1 id="data-13">这个博客用到哪些技术？</h1><p>这个系统是后端是一套java系统</p>
            <p>用的都是现在比较流行的框架 我是一个喜欢用新不用旧的人 主要有一下框架</p>
            <ul>
              <li><p>框架方面: Spring Boot、Mybatis Plus、JWT、lombok、hutool、webmagic等。</p>
              </li>
              <li><p>数据库: mysql。</p>
              </li>
              <li><p>前端方面: vue、vue-element-admin、mavon-editer、axios 、vuex等前端主流框架   </p>
              </li>
              <li><p>图片存储: 目前支持的是七牛云后面在支持其他云厂商的OSS</p>
              </li>
            </ul>
            <h1 id="data-14">这个博客会一直持续迭代吗？</h1><p>这个博客是我第一个开源的项目，我会一直维护下去，让系统真正的持续的为大家提供便利。</p>
            <p>如果你有更好的优化性建议，或者在使用过程中有BUG你可以提出来我尽所能的去优化它。当然如果你愿意一起维护这个产品，我也是很乐意。
              <strong>你觉得还可以就给个Star吧。</strong></p>
            <ul>
              <li><a href="https://shang.qq.com/wpa/qunwpa?idkey=e4098dabb3b751808044bdf58900ad733b983d7efbb5142c5485ececacf3c00d">加入我们的QQ群</a></li>
              <li><a href="http://helloblog.byteblogs.com">我的个人博客地址</a></li>
              <li><a href="http://helloblog.byteblogs.com/docs/">文档地址</a></li>
              <li><a href="https://github.com/byteblogs168/hello-blog">后端代码github地址</a></li>
              <li><a href="https://github.com/byteblogs168/hello-blog-admin">管理系统github地址</a></li>
              <li><a href="https://github.com/byteblogs168/theme-default">默认主题</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>

  </div>
</template>
