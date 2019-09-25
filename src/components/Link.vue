<template>
  <div>
    <div id="main" class="content">
      <div class="container">
        <section class="post_content">
          <header class="post_header">
            <h1 class="post_title">友情链接</h1>
          </header>
          <div class="links">
            <div class="catalog-description"></div>
            <div class="userItems">
              <div class="userItem" v-for="item in list" :key="item.id">
                <div class="userItem--inner">
                  <div class="userItem-content">
                    <img
                      alt=""
                      :src="item.logo"
                      class="avatar avatar-64 photo"
                      height="64"
                      width="64"
                    />
                    <div class="userItem-name">
                      <a
                        class="link link--primary"
                        :href="item.href"
                        target="_blank"
                        >{{ item.name }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchLinkList } from "@/api/api";
export default {
  name: "Link",
  props: {},
  components: {},
  data() {
    return {
      list: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      fetchLinkList().then(res => {
        const { models } = res;
        this.list = models;
      });
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
