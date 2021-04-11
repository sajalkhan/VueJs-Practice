<template>
  <div :class="['divStyle']">
    <button @click="show = true">Open Popup</button>
    <Popup v-show="show" @closeModel="closePopup" />
    <p>{{ childData }}</p>
  </div>
</template>
<script>
import Popup from "./components/popup";
export default {
  name: "App",
  data() {
    return {
      show: false,
      childData: "",
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
