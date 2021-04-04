<template>
  <div>
    Hello {{ name }} from <b>{{ village }}</b>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: ["name", "village"],
};
</script>

<style scoped></style>
