<template>
  <div class="card">
    <!--TODO: slot is work like child concept in react-->
    <slot>Default content</slot>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      info: "",
    };
  },
};
</script>

<style scoped>
.card {
  width: 30vw;
  height: 10vh;
  outline: 0;
  border-radius: 10px;
  background-color: yellowgreen;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  overflow: hidden;
}

.card:hover {
  border: 0;
  background-color: green;
  color: black;
}
</style>
