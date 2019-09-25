import Vue from "vue";
import marked from "marked";
import Hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
let highlight = {};
highlight.install = function(Vue) {
  let rendererMD = new marked.Renderer();
  marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return Hljs.highlightAuto(code).value;
    }
  });

  Vue.directive("highlight", function(el, binding) {
    el.innerHTML = marked(
      binding.value === null || binding.value === undefined ? "" : binding.value
    );
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
      Hljs.highlightBlock(block);
    });
  });
};
export default highlight;

Vue.use(highlight);
