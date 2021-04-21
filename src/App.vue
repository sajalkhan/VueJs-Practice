<template>
  <div :class="['divStyle']">
    <DcHeros />
  </div>
</template>
<script>
import DcHeros from "./Components/DcHeros.vue";
export default {
  name: "App",
  components: {
    DcHeros,
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
