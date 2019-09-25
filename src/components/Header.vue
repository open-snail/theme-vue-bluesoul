<template>
  <div>
    <div id="masthead" class="overlay animated from-bottom" itemprop="brand">
      <div class="site-branding text-center">
        <a href="">
          <figure>
            <img
              class="custom-logo avatar"
              :src="masterUserInfo.avatar"
              v-if="masterUserInfo"
            />
          </figure>
        </a>
        <h3 class="blog-description">
          <p>
            {{ masterUserInfo === null ? "" : masterUserInfo.introduction }}
          </p>
        </h3>
      </div>
      <!-- .site-branding -->
      <div class="decor-part">
        <div id="particles-js"></div>
      </div>
      <div class="animation-header">
        <div class="decor-wrapper">
          <svg
            id="header-decor"
            class="decor bottom"
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
              d="M0 100 L50 50 L0 33.3"
              fill="rgba(255,255,255, .3)"
            ></path>
            <path
              class="medium right"
              d="M100 100 L50 50 L100 33.3"
              fill="rgba(255,255,255, .3)"
            ></path>
            <path
              class="small left"
              d="M0 100 L50 50 L0 66.6"
              fill="rgba(255,255,255, .5)"
            ></path>
            <path
              class="small right"
              d="M100 100 L50 50 L100 66.6"
              fill="rgba(255,255,255, .5)"
            ></path>
            <path
              d="M0 99.9 L50 49.9 L100 99.9 L0 99.9"
              fill="rgba(255,255,255, 1)"
            ></path>
            <path
              d="M48 52 L50 49 L52 52 L48 52"
              fill="rgba(255,255,255, 1)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  components: {},
  data() {
    return {
      masterUserInfo: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await this.$store.dispatch("fetchMasterInfo").then(res => {
        this.masterUserInfo = res.model;
      });
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
