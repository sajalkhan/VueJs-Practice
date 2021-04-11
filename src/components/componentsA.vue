<template>
  <div>
    <h4>Components A</h4>
    <ComponentB />
  </div>
</template>

<script>
import ComponentB from "./componentsB";
export default {
  name: "ComponentA",
  data() {},
  components: {
    ComponentB,
  },
};
</script>

<style scoped></style>
