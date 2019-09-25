<template>
  <div>
    <div id="main" class="content">
      <div class="container">
        <div class="posts-list js-posts">
          <div class="post post-layout-list">
            <div class="postnormal review " v-for="item in list" :key="item.id">
              <div class="post-container review-item">
                <div class="row review-item-wrapper">
                  <div class="col-sm-3">
                    <a rel="nofollow" href="detail.html">
                      <div
                        class="review-item-img"
                        :style="{
                          'background-image': 'url(' + item.thumbnail + ')'
                        }"
                      ></div>
                    </a>
                  </div>
                  <div class="col-sm-9 flex-xs-middle">
                    <div class="review-item-title">
                      <router-link :to="'/article/' + item.id">{{
                        item.title
                      }}</router-link>
                    </div>
                    <div class="review-item-creator">
                      <b>发布日期：</b
                      ><span v-transfer-date="item.createTime"></span>
                    </div>
                    <span class="review-item-info"
                      ><b>总浏览量：</b>{{ item.views }}</span
                    >
                  </div>
                </div>
                <div class="review-bg-wrapper">
                  <div
                    class="bg-blur"
                    :style="{
                      'background-image': 'url(' + item.thumbnail + ')'
                    }"
                  ></div>
                </div>
              </div>
              <div class="post-container">
                <div class="entry-content">
                  <span v-html="item.summary"></span>
                </div>
                <div class="post-footer">
                  <router-link
                    :to="'/article/' + item.id"
                    class="gaz-btn primary"
                    >阅读更多</router-link
                  >
                  <span class="total-comments-on-post pull-right"
                    ><a href="">{{ item.comments }} 评论</a></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- post-formats end Infinite Scroll star -->
        <!-- post-formats -->
        <div class="pagination">
          <el-pagination
            :total="this.listQuery.total"
            :page.sync="listQuery.page"
            :limit.sync="listQuery.size"
            layout="prev, pager, next"
          >
          </el-pagination>
        </div>
        <!-- -pagination  -->
      </div>
    </div>
  </div>
</template>

<script>
import { fetchArticleList } from "@/api/api";
import bus from "../utils/eventBus.js";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: false,
      list: null,
      listQuery: {
        keywords: "",
        page: 1,
        size: 20,
        total: 30
      }
    };
  },
  created() {
    this.getList(null);
  },
  mounted() {
    bus.$on("searchValue", value => {
      this.getList(value);
      console.log(value);
    });
  },
  methods: {
    getList(keywords) {
      fetchArticleList({
        keywords: keywords
      }).then(res => {
        const { models, pageInfo } = res;
        this.list = models;
        this.listQuery = pageInfo;
      });
    }
  }
};
</script>

<style scoped></style>
