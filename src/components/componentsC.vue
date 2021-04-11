<template>
  <div>
    This is component C
    <h4>{{ name }} this name is coming from app components</h4>
  </div>
</template>

<script>
export default {
  name: "ComponentC",
  data() {},
  inject: ["name"],
};
</script>

<style scoped></style>
