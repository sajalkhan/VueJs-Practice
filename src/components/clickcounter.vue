<template>
  <div>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixin from "../mixins/mixin";
export default {
  name: "Clickcount",
  mixins: [CounterMixin],
};
</script>

<style scoped></style>
