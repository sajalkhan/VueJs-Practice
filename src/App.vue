<template>
  <div :class="['divStyle']">
    <Practice />
  </div>
</template>
<script>
import Practice from "./components/practice.vue";

export default {
  name: "App",
  data() {
    return {
      activeTab: "Test",
    };
  },
  components: { Practice },
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
