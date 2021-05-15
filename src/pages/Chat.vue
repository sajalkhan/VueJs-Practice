<template>
  <section class="chat">
    <h1 class="chat__title">Real Time Chat</h1>
    <div class="chat__body">
      <div class="chat__body--input">
        <div class="chat__body--input--text">
          <div
            v-for="chat in state.chats"
            :key="chat.userId"
            :class="chat.userId === userId ? 'text-right' : ''"
          >
            {{ chat.message }}
          </div>
        </div>
        <div>
          <input
            v-model="state.message"
            class="chat__body--input--field"
            placeholder="Start Typing..."
            @keydown.enter="addMessage"
            ref="chat_messageRef"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "./Chat.scss";
import { computed, onMounted, reactive, ref } from "vue";
import firebase from "../utilities/firebase";
import { chatsRef } from "../utilities/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
    });
    const chat_messageRef = ref("");
    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(async () => {
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });

      chat_messageRef.value.focus();
    });

    const addMessage = () => {
      state.userId = firebase.auth().currentUser.uid;

      const newChat = chatsRef.push();
      newChat.set({ userId: userId.value, message: state.message });
      state.message = "";
    };
    return { state, addMessage, userId, chat_messageRef };
  },
};
</script>

<style></style>
