<template>
  <div>
    <h2>Article title - {{ title }}</h2>
    <h5>likes - {{ likes }}</h5>
    <h5>Published - {{ isPublished ? "yes" : "no" }}</h5>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    title: String, // here we can specify props type
    likes: Number,
    isPublished: Boolean,
  },
};
</script>

<style scoped></style>
