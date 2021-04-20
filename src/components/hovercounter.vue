<template>
  <div>
    <h3 @mouseover="incrementCount">Hover {{ count }} times</h3>
  </div>
</template>

<script>
import CounterMixin from "../mixins/mixin";
export default {
  name: "Hovercount",
  mixins: [CounterMixin], //we can add multiple mixin inside this array
};
</script>

<style scoped></style>
