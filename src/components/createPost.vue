<template>
  <div>
    <button @click="create = !create">Create Post</button>
    <form v-if="create" @submit.prevent="createPost">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title.."
          v-model="formData.title"
        />
      </div>

      <div>
        <label for="desc">Description</label>
        <input
          type="text"
          id="desc"
          placeholder="Description.."
          v-model="formData.body"
        />
      </div>
      <button type="submit">Submit</button>
    </form>

    <div v-if="formData.id">
      <h4>title: {{ formData.id }} - {{ formData.title }}</h4>
      <h5>description: {{ formData.body }}</h5>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      create: false,
      formData: {
        id: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async createPost() {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        this.formData
      );

      this.formData = data;
    },
  },
};
</script>

<style scoped></style>
