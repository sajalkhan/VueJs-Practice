<template>
  <div>
    <h4>full name: {{ firstName }} {{ lastName }}</h4>
    <h4>full name with computer property: {{ fullName }}</h4>
    <h4>
      Total -
      {{ listItem.reduce((Total, curr) => (Total += curr.price), 0) }}
    </h4>
    <h4>Calculate total with computed property: {{ totalPrice }}</h4>

    <!-- show value which is greater than 1000 -->
    <template v-for="item in listItem" :key="item.id">
      <h4 v-if="item.price > 1000">{{ item.name }} - {{ item.price }}</h4>
    </template>

    <hr />
    <!-- show expensive item using computed property -->
    <h4>Using computer property</h4>
    <div v-for="item in expensiveItems" :key="item.id">
      <h4>{{ item.name }} - {{ item.price }}</h4>
    </div>
    <hr />
  </div>

  <!-- use of computed property setter -->
  <div>
    <input
      type="text"
      @keyup.enter="changeName"
      v-model.trim.lazy="userfullName"
    />
    <h4>computed full name: {{ computedFullName }}</h4>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "sajal",
      lastName: "khan",
      userfullName: "",
      listItem: [
        {
          id: 0,
          name: "tv",
          price: 1000,
        },
        {
          id: 2,
          name: "freez",
          price: 3000,
        },
        {
          id: 3,
          name: "Ac",
          price: 7000,
        },
        {
          id: 4,
          name: "computer",
          price: 4000,
        },
      ],
    };
  },
  methods: {
    changeName() {
      const value = this.userfullName.split(" ");
      this.firstName = value[0];
      this.lastName = value[1];
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    computedFullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
      },
    },
    totalPrice() {
      return this.listItem.reduce((total, curr) => (total += curr.price), 0);
    },
    expensiveItems() {
      return this.listItem.filter((item) => item.price > 1000);
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
