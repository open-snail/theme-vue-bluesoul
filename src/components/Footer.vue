<template>
  <div>
    <div id="footer" class="overlay animated from-top">
      <div class="decor-wrapper">
        <svg
          id="footer-decor"
          class="decor top"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            class="large left"
            d="M0 0 L50 50 L0 100"
            fill="rgba(255,255,255, .1)"
          ></path>
          <path
            class="large right"
            d="M100 0 L50 50 L100 100"
            fill="rgba(255,255,255, .1)"
          ></path>
          <path
            class="medium left"
            d="M0 0 L50 50 L0 66.6"
            fill="rgba(255,255,255, .3)"
          ></path>
          <path
            class="medium right"
            d="M100 0 L50 50 L100 66.6"
            fill="rgba(255,255,255, .3)"
          ></path>
          <path
            class="small left"
            d="M0 0 L50 50 L0 33.3"
            fill="rgba(255,255,255, .5)"
          ></path>
          <path
            class="small right"
            d="M100 0 L50 50 L100 33.3"
            fill="rgba(255,255,255, .5)"
          ></path>
          <path d="M0 0 L50 50 L100 0 L0 0" fill="rgba(255,255,255, 1)"></path>
          <path
            d="M48 48 L50 51 L52 48 L48 48"
            fill="rgba(255,255,255, 1)"
          ></path>
        </svg>
      </div>
      <div class="socialize" data-aos="zoom-in">
        <li class="wechat">
          <a class="socialicon" :href="htmlUrl" target="_blank"
            ><i class="iconfont">&#xe732;</i></a
          >
        </li>
      </div>
      <div class="cr">{{ copyright }} 备案号:{{ icp }} 版本:{{ metas }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    copyright: {
      type: String
    },
    metas: {
      type: String
    },
    icp: {
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    htmlUrl: {
      get() {
        return this.$store.state.masterUserInfo !== null
          ? this.$store.state.masterUserInfo.htmlUrl
          : "";
      }
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped></style>
