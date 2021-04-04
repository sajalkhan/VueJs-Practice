<template>
  <div class="divStyle">
    <Hello name="test" village="test village" />
    <template v-for="(item, indx) in info" :key="indx">
      <Hello :name="item.name" :village="item.village" />
    </template>
  </div>

  <div class="divStyle">
    <Article title="information list" :likes="50" :isPublished="true" />
  </div>
</template>

<script>
import Hello from "./components/Hello";
import Article from "./components/Article";
export default {
  name: "App",
  data() {
    return {
      info: [
        {
          name: "sajal",
          village: "natore",
        },
        {
          name: "abir",
          village: "natore",
        },
        {
          name: "kabir",
          village: "dhaka",
        },
      ],
    };
  },
  components: {
    Hello,
    Article,
  },
};
</script>

<style>
.divStyle {
  display: grid;
  justify-content: center;
}
</style>
