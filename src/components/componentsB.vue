<template>
  <div>
    <h4>Components B</h4>
    <ComponentsC />
  </div>
</template>

<script>
import ComponentsC from "./componentsC";
export default {
  name: "ComponentB",
  data() {},
  components: {
    ComponentsC,
  },
};
</script>

<style scoped></style>
