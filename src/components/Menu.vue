<template>
  <div>
    <div class="navi open" :class="{ close: this.isOpen }">
      <div class="bt-nav" @click="showMenu">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
      <div class="navbar animated fadeInRight">
        <div class="inner">
          <nav id="site-navigation" class="main-navigation">
            <div id="main-menu" class="main-menu-container">
              <div class="menu-menu-container">
                <ul id="primary-menu" class="menu">
                  <li
                    id="menu-item-17"
                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-17"
                  >
                    <router-link to="/">首页</router-link>
                  </li>
                  <li
                    id="menu-item-78"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"
                  >
                    <router-link to="/tags">标签墙</router-link>
                  </li>
                  <li
                    id="menu-item-252"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-252"
                  >
                    <router-link to="/archives">归档</router-link>
                  </li>
                  <li
                    id="menu-item-79"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"
                  >
                    <router-link to="/link">友情链接</router-link>
                  </li>
                  <li
                    id="menu-item-57"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"
                  >
                    <router-link to="/about">关于</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- #site-navigation -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  components: {},
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    showMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
