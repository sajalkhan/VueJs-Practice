<template>
  <div :class="['divStyle']">
    <button @click="show = true">Open Popup</button>
    <Popup v-show="show" @closeModel="closePopup" />
    <!-- // here i have pass v-model as a props -->
    <Input v-model="name" />
    <p v-if="name.length">parent: {{ name }}</p>
    <p>{{ childData }}</p>
  </div>
</template>
<script>
import Popup from "./components/popup";
import Input from "./components/input.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
      childData: "",
      name: "",
    };
  },
  methods: {
    closePopup(value) {
      this.show = false;
      this.childData = value;
    },
  },
  components: {
    Popup,
    Input,
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

input {
  margin-top: 20px;
}
</style>
