<template>
  <div>
    <button @click="getNews">Get Data</button>
    <div v-for="news in news" :key="news.id">
      <h3>{{ news.id }} - {{ news.title }}</h3>
      <p>{{ news.body }}</p>
      <hr />
    </div>
  </div>
</template>

<!-- //! vue js async/await N.B: https://lukashermann.dev/writing/how-to-use-async-await-with-vuejs-components/ -->

<script>
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async getNews() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.news = data;
      console.log(data);
    },
  },
  // async created() {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );

  //   this.news = data;
  // },
};
</script>

<style scoped></style>
