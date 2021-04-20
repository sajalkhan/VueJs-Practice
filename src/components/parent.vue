<template>
  <div>parent compoennt</div>
  <button @click="showChild = !showChild">Toggle child</button>
  <Child v-if="showChild" />
</template>

<script>
import Child from "./child.vue";
export default {
  name: "Parent",
  data() {
    return {
      showChild: true,
    };
  },
  components: {
    Child,
  },
  beforeCreate() {
    console.log("parent beforeCreated()");
  },
  created() {
    console.log("parent created()");
  },
  beforeMount() {
    console.log("parent beforeMounte()");
  },
  mounted() {
    console.log("parent mounted()");
  },
  beforeUpdate() {
    console.log("parent beforeUpdate()");
  },
  updated() {
    console.log("parent updated()");
  },
  beforeUnmount() {
    console.log("parent beforeUnmount()");
  },
  unmounted() {
    console.log("parent unmounted()");
  },
};
</script>

<style scoped></style>
