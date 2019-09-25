<template>
  <div id="main" class="content" v-if="this.article !== null">
    <div class="container">
      <div class="post_content">
        <header class="post_header">
          <h1 class="post_title">
            {{ article.title }}
          </h1>
        </header>
        <div class="post-body">
          <div v-highlight="article.content"></div>
        </div>
        <div class="meta split split--responsive cf">
          <div class="split__title">
            <span v-transfer-date="article.createTime"></span>&nbsp;&nbsp;
            <span class="">
              <a
                href=""
                rel="tag"
                v-for="item in article.tagsList"
                :key="item.id"
                >{{ item.name }}</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <svg
      id="upTriangleColor"
      width="100%"
      height="40"
      viewBox="0 0 100 102"
      preserveAspectRatio="none"
    >
      <path d="M0 0 L50 100 L100 0 Z"></path>
    </svg>
    <div id="social">
      <ul>
        <li>
          <a href="" title="qzone" target="_blank"
            ><i class="iconfont">&#xe67f;</i></a
          >
        </li>
        <li>
          <a href="" title="weibo" target="_blank"
            ><i class="iconfont">&#xe680;</i></a
          >
        </li>
        <li>
          <a href="" title="douban" target="_blank"
            ><i class="iconfont">&#xe681;</i></a
          >
        </li>
        <li>
          <a href="" title="twitter" target="_blank"
            ><i class="iconfont">&#xe683;</i></a
          >
        </li>
      </ul>
    </div>
    <Comment :postsId="id" />
  </div>
</template>
<script>
import { fetchArticle } from "@/api/api";
import Comment from "@/components/Comment";
export default {
  components: {
    Comment
  },
  data() {
    return {
      article: null,
      title: "",
      description: "",
      id: null
    };
  },
  created() {
    const id = this.$route.params && this.$route.params.id;
    this.id = Number(id);
    this.getArticle(id);
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: "description", name: "description", content: this.description }
      ]
    };
  },
  methods: {
    async getArticle(id) {
      await fetchArticle(id).then(res => {
        if (res.success === 1) {
          this.article = res.model;
          this.title = res.model.title;
          this.description = res.model.summary;
        }
      });
    }
  }
};
</script>
<style scoped></style>
