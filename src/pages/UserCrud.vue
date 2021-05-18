<template>
  <section class="crud">
    <Create @new-user-added="addUser" />
    <div>
      <table class="crud__table">
        <thead class="crud__table__head">
          <tr class="crud__table__head__row">
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="crud__table__body">
          <tr v-for="user in state.users.data" :key="user.id">
            <td>{{ user.id }}</td>
            <td>
              <img
                :src="user.avatar"
                :alt="user.first_name"
                width="50"
                class="rounded-full"
              />
            </td>
            <td>{{ user.first_name }} {{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="destroy(user.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="crud__button">
        <button
          @click="prev"
          :disabled="state.users.page === 1"
          :style="state.users.page === 1 ? 'cursor:no-drop' : ''"
        >
          Prev
        </button>
        <button
          @click="next"
          :disabled="state.users.page === state.users.total_pages"
          :style="state.users.page === state.total_page ? 'cursor:no-drop' : ''"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import "./UserCrud.scss";
import axios from "axios";
import { onMounted, reactive } from "vue";

import Create from "../components/UserCrud/create";
export default {
  components: { Create },
  setup() {
    const state = reactive({
      users: [],
      total_page: null,
    });

    let api_key = "https://reqres.in/api";

    onMounted(async () => {
      const { data } = await axios.get(`${api_key}/users`);
      state.users = data;
      state.total_page = data.total_pages;
    });

    async function next() {
      const { data } = await axios.get(`${api_key}/users?page=2`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`${api_key}/users?page=1`);
      state.users = data;
    }

    async function destroy(id) {
      await axios.delete(`${api_key}/users/${id}`);
      state.users.data = state.users.data.filter((user) => user.id !== id);
    }
    function addUser(data) {
      state.users.data.push(data);
    }
    return { state, next, prev, destroy, addUser };
  },
};
</script>

<style scoped></style>
