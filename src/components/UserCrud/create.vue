<template>
  <button class="add_user" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false">
      <template v-slot:closeBtn>
        <div class="close" @click="isModalOpen = false">+</div>
      </template>
      <template v-slot:title>
        Add New User
      </template>
      <template v-slot:description>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label>Name</label>
            <input
              class=""
              placeholder="User Name"
              v-model="state.form.first_name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class=""
              placeholder="User Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class=""
              placeholder="Avatar Url"
              type="text"
              v-model="state.form.avatar"
            />
          </div>
          <div>
            <input class="" type="submit" value="Create" />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { reactive, ref } from "vue";
import Modal from "../Modal";
import axios from "axios";

export default {
  components: { Modal },
  setup(_, { emit }) {
    let api_key = "https://reqres.in/api";

    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        first_name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const { data } = await axios.post(`${api_key}/users`, state.form);
      emit("new-user-added", data);
      state.form.email = "";
      state.form.first_name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }
    return { isModalOpen, submit, state };
  },
};
</script>

<style scoped>
.add_user {
  border: 0;
  color: white;
  padding: 10px;
  background-color: tan;
  cursor: pointer;
}
</style>
