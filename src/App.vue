<template>
  <div id="app">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="bubble"
      :clickEffect="true"
      clickMode="bubble"
      class="lizi"
    >
    </vue-particles>
    <div class="Yarn_Background" :style="backImage"></div>
    <Search />
    <Menu />
    <Header />
    <router-view />
    <Footer :copyright="copyright" :metas="metas" :icp="icp" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Menu from "@/components/Menu";
export default {
  name: "home",
  components: {
    Header,
    Footer,
    Search,
    Menu
  },
  data() {
    return {
      backImage:
        "background-image: url(" + require("./assets/images/bg.jpg") + ");",
      title: "",
      keywords: "",
      description: "",
      copyright: "",
      metas: "",
      icp: ""
    };
  },
  mounted() {},
  created() {
    this.getInfo();
    this.getConfig();
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: "description", name: "description", content: this.description },
        { vmid: "keywords", name: "keywords", content: this.keywords }
      ]
    };
  },
  methods: {
    getInfo() {
      if (
        this.$store.state.token !== null &&
        this.$store.state.token !== undefined
      ) {
        this.$store.dispatch("getInfo");
      }
    },
    getConfig() {
      this.$store.dispatch("getConfigList", { type: 0 }).then(res => {
        if (res) {
          const { models } = res;
          models.forEach(item => {
            if (item.configKey === "name") {
              this.title = item.configValue;
            }

            if (item.configKey === "keywords") {
              this.keywords = item.configValue;
            }

            if (item.configKey === "description") {
              this.description = item.configValue;
            }

            if (item.configKey === "copyright") {
              this.copyright = item.configValue;
            }

            if (item.configKey === "metas") {
              this.metas = item.configValue;
            }

            if (item.configKey === "icp") {
              this.icp = item.configValue;
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
