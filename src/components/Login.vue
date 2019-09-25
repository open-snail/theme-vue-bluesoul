<template>
  <div>
    <div id="main" class="content">
      <div class="container">
        <div class="post_content" style="text-align: center;">
          <header class="post_header">
            <h1 class="post_title">
              欢迎登录hello blog
            </h1>
          </header>
          <div class="post-body" @click="handleLogin">
            <img
              src="../assets/images/github.png"
              style="width: 100px;height: 100px;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOauthLoginByGithub } from "@/api/api";
import openWindow from "@/utils/open-window";
export default {
  name: "",
  props: {},
  computed: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      getOauthLoginByGithub().then(res => {
        openWindow(res.model.authorizeUrl, "绑定GitHub", 540, 540);
        window.addEventListener("message", this.loginGithubHandel, false);
      });
    },
    loginGithubHandel(e) {
      const { socialId } = e.data;
      console.log(e.data);
      if (socialId) {
        this.$store.dispatch("login", e.data).then(res => {
          console.log(res);
          if (res.success === 1) {
            this.$router.push({
              path: "/"
            });
          }
        });
        window.removeEventListener("message", this.loginGithubHandel, false);
      }
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
