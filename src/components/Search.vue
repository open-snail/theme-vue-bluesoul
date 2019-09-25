<template>
  <div>
    <div
      class="js-search search-form search-form--modal"
      :class="{ 'is-visible': isShowSearch }"
    >
      <div class="search-form__inner">
        <div>
          <div id="search-container" class="ajax_search">
            <div class="filter_container">
              <input
                type="text"
                v-model="value"
                autocomplete="off"
                placeholder="输入关键词搜索"
                name="s"
                id="search-input"
                @keyup.enter="search"
              />
              <ul id="search_filtered" class="search_filtered"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="position: absolute;z-index: 998;top: 2.5em;left: 3em;"
      @click="showSearch"
    >
      <img src="../assets/images/seach.png" class="search-icon" />
    </div>
  </div>
</template>

<script>
import bus from "../utils/eventBus.js";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      isShowSearch: false,
      value: ""
    };
  },
  methods: {
    showSearch() {
      this.isShowSearch = !this.isShowSearch;
    },
    search() {
      bus.$emit("searchValue", this.value);
      console.log("1121");
    }
  },
  mounted() {}
};
</script>

<style scoped>
.search-icon {
  width: 35px;
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
}
</style>
