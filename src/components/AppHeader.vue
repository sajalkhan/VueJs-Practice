<template>
  <nav class="app-header">
    <ul class="app-header__list">
      <router-link
        class="app-header__list--item"
        v-for="item in list"
        :key="item.to"
        :to="item.to"
      >
        {{ item.title }}
      </router-link>

      <button v-if="isLogedIn" @click="logout">Logout</button>
      <button v-else @click="$emit('open-login-modal')">Login</button>
    </ul>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props: { isLogedIn: Boolean },
  data() {
    return {
      list: [
        {
          title: "Dc Heros",
          to: "/dc-heros",
        },
        {
          title: "Markdown",
          to: "/markdown",
        },
        {
          title: "Slider Carousel",
          to: "/slider",
        },
        {
          title: "Calculator",
          to: "/calculator",
        },
        {
          title: "Modal",
          to: "/modal",
        },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("singout successfully!");
        })
        .catch((error) => {
          console.log("error -- ", error);
        });
    },
  },
};
</script>

<style scoped>
.app-header {
  height: 50px;
  width: 100vw;
  background: #3742fa;
  display: flex;
}
.app-header__list {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.app-header__list > button {
  border: 0;
  outline: 0;
  background: transparent;
  color: white;
  cursor: pointer;
}

.app-header__list > button:hover {
  color: #70a1ff;
}

.app-header__list--item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
  list-style: none;
  color: white;
  cursor: pointer;
}

.app-header__list--item:hover {
  color: #70a1ff;
}
.app-header__list--item:not(:last-child) {
  margin: 10px;
}
</style>
