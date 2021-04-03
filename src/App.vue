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
  <br />
  <div>
    <!--  
    modifiers 
    1. trim 
    2. lazy 
    3. number 
    4. prevent (example:@submit.prevent='method name') 
    5. keyup
    -->

    <!-- trim works for remove leading and trailing spaces -->
    name: <input type="text" v-model.trim="info.userName" /><br />
    <!-- lazy modifiers help to update data after click outside -->
    email: <input type="text" v-model.trim.lazy="info.email" /><br />
    <!-- number modifiers help to store number value -->
    age: <input type="number" v-model.number="info.age" @keyup.enter="keyUp" />
  </div>

  <pre>
    {{ info }}
  </pre>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      district: ["dhaka", "rajshahi", "natore", "khulna"],
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
      info: {
        userName: "",
        email: "",
        age: null,
      },
    };
  },

  methods: {
    keyUp() {
      alert("yes keup called");
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

body {
  background: yellow;
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
