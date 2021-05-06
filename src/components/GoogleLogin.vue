<template>
  <button @click="loginWithGoogle">Login with google</button>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-google-login-modal");
        });
    },
  },
};
</script>

<style scoped></style>
