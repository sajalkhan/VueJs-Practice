<template>
  <section @click="close" class="bg-background" />
  <div class="modal-contents">
    <div class="close" @click="$emit('close-login-modal')">+</div>
    <form class="login-form" @submit.prevent="submit">
      <label class="login-form__title">Login</label>

      <div class="login-form__email">
        <label for="email">Email or Username</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter user email"
          ref="emailRef"
        />
      </div>

      <div class="login-form__password">
        <label for="pass">Password</label>
        <input
          id="pass"
          v-model="password"
          type="password"
          placeholder="Enter user password"
        />
      </div>

      <button type="submit">
        <span v-if="!isLoading">Login</span>
        <span v-else>⏳</span>
        <!-- //hourglass emoji -->
      </button>
      <span style="textAlign:'center'">or</span>
      <GoogleLogin @close-google-login-modal="close" />
    </form>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "../components/GoogleLogin";

import "./LoginModal.scss";
export default {
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Signed in
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((error) => {
          this.isLoading = false;
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("erro -- ", errorCode, " message -- ", errorMessage);
        });
    },
    close() {
      this.$emit("close-login-modal");
    },
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
};
</script>
