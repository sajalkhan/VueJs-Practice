<template>
  <div :class="['divStyle']">
    <div class="tab">
      <button @click="activeTab = 'Test'">TabA</button>
      <button @click="activeTab = 'Test2'">TabB</button>
      <button @click="activeTab = 'Tab3'">TabC</button>
    </div>

    <!--//! first way to make dynamic rendering -->
    <!-- <Test v-if="activeTab == 'Tab1'">
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

    <Test2 v-if="activeTab == 'Tab2'">
      <template v-slot:default="data">
        {{ data.firstName }} {{ data.lastName }}
      </template>
    </Test2> -->

    <!--//!second way -->
    <component :is="activeTab" />

    <!--//!when switching component vue create a new instane so keep that instane we can use keep alive attribute -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
  </div>
</template>
<script>
import Test from "./components/test.vue";
import Test2 from "./components/slotProps.vue";
import Tab3 from "./components/input.vue";
export default {
  name: "App",
  data() {
    return {
      activeTab: "Test",
    };
  },
  components: {
    Test,
    Test2,
    Tab3,
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

.tab {
  display: flex;
  justify-content: center;
}
.tab > button {
  margin: 10px;
  width: 80px;
  height: 30px;
  background-color: coral;
  border: 0;
  cursor: pointer;
  outline: 0;
}
</style>
