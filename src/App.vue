<template>
  <div :class="['divStyle']">
    <!-- //default text -->
    <Test /> <br />
    <Test>children 1</Test> <br />
    <Test>children 2</Test> <br />
    <Test>
      <img src="https://picsum.photos/200" alt="" />
    </Test>
  </div>
</template>
<script>
import Test from "./components/test.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Test,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list {
  list-style-type: none;
  border: 1px solid black;
  width: 50vw;
}

.divStyle {
  display: grid;
  justify-content: center;
}
</style>
