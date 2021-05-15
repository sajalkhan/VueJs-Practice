<template>
  <AppHeader />
  <router-view />
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utilities/firebase";

export default {
  computed: {
    isLoginOpen() {
      return this.$store.state.isOpenLoginModal;
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setLoginModal", false);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
  components: {
    AppHeader,
    LoginModal,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 90vh;
  width: 99vw;
}
</style>
