<template>
  <AppHeader @open-login-modal="isOpenLoginModal = true" />
  <router-view />
  <LoginModal
    v-if="isOpenLoginModal"
    @close-login-modal="isOpenLoginModal = false"
  />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
export default {
  name: "App",
  data() {
    return {
      isOpenLoginModal: false,
    };
  },
  components: {
    AppHeader,
    LoginModal,
  },
};
</script>
