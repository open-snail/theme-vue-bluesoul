<template>
  <div>
    <div id="main" class="content">
      <div class="container">
        <section class="post_content">
          <header class="post_header">
            <h1 class="post_title">标签墙</h1>
          </header>
          <div class="tags_list">
            <el-tag type="info" v-for="item in list" :key="item.id"
              >{{ item.name }}({{ item.postsTotal }})</el-tag
            >
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchTagsList } from "@/api/api";
export default {
  name: "Tags",
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
      fetchTagsList().then(res => {
        this.list = res.models;
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.tags_list span {
  margin: 10px;
}
</style>
