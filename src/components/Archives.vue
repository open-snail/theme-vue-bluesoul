<template>
  <div>
    <div id="main" class="content">
      <div class="container">
        <section class="post_content">
          <header class="post_header">
            <h1 class="post_title">归档</h1>
          </header>
          <div class="post-Archive">
            <div id="archives">
              <div class="archive-title" v-for="item in list" :key="item.id">
                <h3>
                  {{ formatDate(item.archiveDate) }} ({{ item.articleTotal }})
                </h3>
                <div class="archives"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchArchiveTotalByDateList } from "@/api/api";
export default {
  name: "archives",
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
      fetchArchiveTotalByDateList().then(res => {
        this.list = res.models;
      });
    },
    formatDate(time) {
      const date = new Date(time);
      const month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return date.getFullYear() + "年" + " " + month + " " + "月" + " " + day;
    }
  },
  mounted() {}
};
</script>

<style scoped></style>
