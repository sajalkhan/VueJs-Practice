<template>
  <div class="card">
    <h2>welcome to Card components</h2>
    <!--TODO: slot is work like child concept in react-->
    <!-- <slot>Default content</slot> -->
  </div>

  <div class="card2">
    <div class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__content">
      <slot></slot>
    </div>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
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
.card2 {
  width: 50vw;
  height: 50vh;
  outline: 0;
  border-radius: 10px;
  background-color: yellowgreen;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: green;
  overflow: hidden;
}

.card2:hover {
  border: 0;
  background-color: green;
  color: black;
}
</style>
