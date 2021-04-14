<template>
  <div :class="['divStyle']">
    <!-- 
    <Test /> <br /> -----// !Default children <Test/> ---//
    <Test>children 1</Test> <br />
    <Test>children 2</Test> <br />
    <Test>
      <img src="https://picsum.photos/200" alt="" />
    </Test>
    <br />
    -->

    <!--//! example of name slots -->
    <Test>
      <template v-slot:header>
        <h3>header</h3>
      </template>
      <template v-slot:default>
        <img src="https://picsum.photos/200" alt="" />
      </template>
      <template v-slot:footer>
        <h5>footer</h5>
      </template>
    </Test>

    <!--//! example of slot props -->
    <Test2>
      <template v-slot:default="data">
        {{ data.firstName }} {{ data.lastName }}
      </template>
    </Test2>
  </div>
</template>
<script>
import Test from "./components/test.vue";
import Test2 from "./components/slotProps.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Test,
    Test2,
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
