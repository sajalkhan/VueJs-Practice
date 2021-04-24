<template>
  <div class="markdown">
    <h1 class="markdown__header">Markdown App</h1>
    <section class="markdown__body">
      <article class="markdown__body--left">
        <textarea
          class="markdown__body--left-input"
          :value="text"
          @input="updateText"
          ref="leftTextRef"
        />
      </article>
      <article class="markdown__body--right" v-html="markedText" />
    </section>
  </div>
</template>

<script>
import debounce from "../utilities/mixins/debounce";
import { computed, onMounted, ref } from "vue";
//! --- https://www.npmjs.com/package/marked ---
import marked from "marked";

import "./Markdown.scss";
export default {
  setup() {
    const leftTextRef = ref("");
    const text = ref("**this is markdown app** it's *italic*");

    onMounted(() => {
      leftTextRef.value.focus();
    });

    //!use debounc func for add new feature like when user type it will reflect after some times
    const updateText = debounce((e) => {
      text.value = e.target.value;
    }, 1000);

    const markedText = computed({
      get: () => marked(text.value),
    });

    return { text, updateText, leftTextRef, markedText };
  },
};
</script>
