<template>
  <div :class="['divStyle']">
    <ul v-for="(dist, indx) in district" :key="indx" :class="['list']">
      <li>{{ dist }}</li>
    </ul>
  </div>

  <div v-for="(u, indx) in users" :key="indx">
    <h2>Name: {{ u.name }}</h2>
    <span v-for="(info, i) in u.info" :key="i">
      <label v-if="i === 0"><strong>Home Town:</strong> {{ info }}, </label>
      <label v-if="i === 1"><strong>Home Dist:</strong> {{ info }}, </label>
      <label v-if="i === 2"><strong>University:</strong> {{ info }}</label>
    </span>
  </div>

  <div>
    <h4>{{ name }}</h4>
    <h4>result: {{ result }}</h4>
    <!-- call multiple method -->
    <button @click="changeName(), updateResult($event)">
      Change Name and update result
    </button>
    {{ " " }}
    <button @mouseover="changeNamebyHover">Change Name by hover</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      district: ["dhaka", "rajshahi", "natore", "khulna"],
      name: "sajal khan",
      count: 0,
      result: 100,
      users: [
        {
          name: "sohrab hossain",
          info: ["natore", "rajshahi", "diu"],
        },
        {
          name: "khairul bashar",
          info: ["natore", "rajshahi", "hstu"],
        },
        {
          name: "mustafizur rahaman",
          info: ["rangpur", "rajshahi", "ru"],
        },
      ],
    };
  },
  methods: {
    changeName() {
      this.name = `sajal khan ${++this.count}`;
    },
    changeNamebyHover() {
      this.name = `sajal khan ${--this.count}`;
    },
    updateResult() {
      this.result = --this.result;
    },
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
