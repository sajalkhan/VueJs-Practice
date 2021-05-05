<template>
  <div class="bg-modal">
    <section @click="$emit('close-login-modal')" class="bg-background" />
    <div class="modal-contents">
      <div class="close" @click="$emit('close-login-modal')">+</div>
      <form class="login-form" @submit.prevent="submit">
        <label class="login-form__title">Login</label>

        <div class="login-form__email">
          <label for="email">Email or Username</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter user email"
          />
        </div>

        <div class="login-form__password">
          <label for="pass">Password</label>
          <input
            id="pass"
            v-model="form.password"
            type="password"
            placeholder="Enter user password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import "./LoginModal.scss";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      console.log("info-- ", this.form);
    },
  },
};
</script>
