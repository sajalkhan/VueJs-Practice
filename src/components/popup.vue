<template>
  <div>
    <p>This is a child popup</p>
    <div><input type="text" name="name" v-model="info" /></div>
    <button @click="$emit('closeModel', info)">
      close Popup
    </button>
  </div>
</template>

<script>
export default {
  name: "Popup",
  emits: ["closeModel"],
  data() {
    return {
      info: "",
    };
  },
};
</script>

<style scoped></style>
