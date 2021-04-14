<template>
  <div class="nameList">
    <h3 v-for="name in names" :key="name">
      <!-- {{ name.firstName }} {{ name.lastName }} -->
      <!--//! v-bind:variablename helps to pass props to parent components -->
      <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      names: [
        {
          firstName: "sajal",
          lastName: "khan",
        },
        {
          firstName: "sajal2",
          lastName: "khan2",
        },
        {
          firstName: "sajal3",
          lastName: "khan3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nameList {
  display: grid;
  justify-content: center;
}
</style>
