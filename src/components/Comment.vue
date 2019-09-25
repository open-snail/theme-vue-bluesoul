<template>
  <div>
    <div class="comment-area">
      <section class="comments">
        <div class="comments-main">
          <div id="comments-list-title">
            <span>{{ listQuery.total }}</span> 条评论
          </div>
          <div id="loading-comments">
            <div class="host">
              <div class="loading loading-0"></div>
              <div class="loading loading-1"></div>
              <div class="loading loading-2"></div>
            </div>
          </div>
          <ul class="commentwrap">
            <li class="comment even thread-even depth-1" id="li-comment-">
              <div class="comment_body contents" v-for="item in list">
                <div class="profile">
                  <img :src="item.authorAvatar" class="gravatar" />
                </div>
                <div class="main shadow">
                  <div class="commentinfo">
                    <section class="commeta">
                      <div class="shang">
                        <h4 class="author">
                          <a href="" target="_blank">{{ item.authorName }}</a>
                        </h4>
                      </div>
                    </section>
                  </div>
                  <div class="body">
                    <span
                      v-if="
                        item.parentUserName !== null &&
                          item.parentUserName !== undefined &&
                          item.parentUserName !== ''
                      "
                      >@{{ item.parentUserName }}
                    </span>
                    <span>{{ item.content }}</span>
                  </div>
                  <div class="xia info">
                    <span v-transfer-date="item.createTime"></span>
                    <span
                      ><a
                        rel="nofollow"
                        class="comment-reply-link"
                        @click="reply(item)"
                        >回复</a
                      ></span
                    >
                  </div>
                </div>
              </div>
            </li>
            <!-- #comment-## -->
          </ul>
          <nav id="comments-navi">
            <el-pagination
              :total="this.listQuery.total"
              :page.sync="listQuery.page"
              :limit.sync="listQuery.size"
              layout="prev, pager, next"
              @prev-click="prevPage"
              @next-click="nextPage"
              @current-change="currentPage"
            >
            </el-pagination>
          </nav>

          <div id="respond" class="comment-respond">
            <div class="comment-form-info">
              <div class="real-time-gravatar">
                <img :src="userInfo.avatar" v-if="userInfo !== null" />
                <img
                  src="https://www.whatyun.cn/_nuxt/img/02f3cea.png"
                  v-else
                />
              </div>
              <p class="input-row">
                <i class="row-icon"></i>
                <textarea
                  class="text_area"
                  rows="3"
                  cols="80"
                  name="comment"
                  id="comment"
                  tabindex="4"
                  placeholder="输入评论"
                  v-model="content"
                  @focus="login"
                ></textarea>
                <input
                  type="submit"
                  name="submit"
                  class="button"
                  id="submit"
                  tabindex="5"
                  @click="savePostsComments"
                  value="发送"
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { savePostsComments, getPostsCommentsList } from "@/api/api";
export default {
  name: "",
  props: {
    postsId: {
      type: Number
    }
  },
  components: {},
  data() {
    return {
      isShowLogin: false,
      content: "",
      preContent: "",
      list: null,
      listQuery: {
        page: 0,
        size: 0,
        total: 0
      },
      isReply: false,
      parentId: null
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created() {
    this.getPostsCommentsList();
  },
  methods: {
    login() {
      const token = this.$store.state.token;
      if (token === null || token === undefined) {
        this.$router.push("/login");
      }
    },
    savePostsComments() {
      if (this.content === "") {
        this.$message({
          message: "内容不能为空",
          type: "error",
          showClose: true,
          duration: 1000
        });
        return;
      }

      let json = {
        content: this.content,
        postsId: this.postsId
      };

      if (this.isReply) {
        let content = this.content.replace(this.preContent, "");
        if (this.content.indexOf(this.preContent, 0) !== -1) {
          json["parentId"] = this.parentId;
          json["content"] = content;
        }
        console.log(json);
        console.log(this.content.indexOf(this.preContent, 0));
      }

      savePostsComments(json).then(res => {
        console.log(res);
        this.$message({
          message: "评论成功",
          type: "success",
          showClose: true,
          duration: 1000
        });

        this.getPostsCommentsList();
        this.content = "";
      });
    },
    getPostsCommentsList(page) {
      getPostsCommentsList({
        postsId: this.postsId,
        page: page === undefined ? 1 : page,
        size: 5
      }).then(res => {
        console.log(res);
        const { success, models, pageInfo } = res;
        if (success === 1) {
          this.list = models;
          this.listQuery = pageInfo;
        }
      });
    },
    reply(item) {
      this.preContent = "@" + item.authorName + ":";
      this.content = this.preContent;
      this.isReply = true;
      this.parentId = item.id;
    },
    prevPage(item) {
      console.log(item);
      this.getPostsCommentsList(item);
    },
    nextPage(item) {
      console.log(item);
      this.getPostsCommentsList(item);
    },
    currentPage(item) {
      console.log(item);
      this.getPostsCommentsList(item);
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
