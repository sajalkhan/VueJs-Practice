<template>
  <div :class="['divStyle']">
    <h4>{{ name }} is learning vuejs</h4>
    <ComponentA />
  </div>
</template>
<script>
import ComponentA from "./components/componentsA";

export default {
  name: "App",
  data() {
    return {
      name: "sajal khan",
    };
  },
  components: {
    ComponentA,
  },
  provide() {
    return {
      name: this.name,
    };
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

.divStyle {
  display: grid;
  justify-content: center;
}
</style>
