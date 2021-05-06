<template>
  <AppHeader
    @open-login-modal="isOpenLoginModal = true"
    :isLogedIn="isLogedIn"
  />
  <router-view />
  <teleport to="body">
    <LoginModal
      v-if="isOpenLoginModal"
      @close-login-modal="isOpenLoginModal = false"
    />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utilities/firebase";

export default {
  name: "App",
  data() {
    return {
      authUser: {},
      isLogedIn: false,
      isOpenLoginModal: false,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogedIn = true;
        this.authUser = user;
      } else {
        this.isLogedIn = false;
        this.authUser = {};
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
body {
  height: 90vh;
  width: 99vw;
}
</style>
