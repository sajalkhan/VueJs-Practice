<template>
  <div :class="['divStyle']">
    <!--//! now inspect dev console and see that portal is now upder the app component -->
    <Portal />

    <!--//!Teleport provides a clean way to allow us to control under which parent in our DOM we want a piece of HTML to be rendered, without having to resort to global state or splitting this into two components.  -->
    <teleport to="#portal-root">
      <Portal />
    </teleport>
    <!--//! N.B: https://codesandbox.io/s/vishwas-vue-teleport-4z93t -->
  </div>
</template>
<script>
import Portal from "./components/portal";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Portal },
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
