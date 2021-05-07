<template>
  <div class="reusable_modal">
    <button @click="isRedModalOpen = true">Open red modal</button>
    <button @click="isGreenModalOpen = true">Open green modal</button>
  </div>

  <!-- //!modal 1 -->
  <Modal v-if="isRedModalOpen" @close-modal="isRedModalOpen = false">
    <template v-slot:closeBtn>
      <div class="close" @click="isRedModalOpen = false">+</div>
    </template>
    <template v-slot:title>
      <h2 style="color:red">This is a red modal</h2>
    </template>
    <template v-slot:description>
      <h4 style="color:orange">I really like this 🍀</h4>
    </template>
  </Modal>

  <!-- //!Modal 2 -->
  <Modal v-if="isGreenModalOpen" @close-modal="isGreenModalOpen = false">
    <template v-slot:description>
      <h4 style="color:green">This is a green modal 🌻</h4>
    </template>
  </Modal>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";

export default {
  setup() {
    const isRedModalOpen = ref(false);
    const isGreenModalOpen = ref(false);

    return { isRedModalOpen, isGreenModalOpen };
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss" scoped>
.reusable_modal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    height: 30px;
    width: 150px;
    margin: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 20px;
  }

  > button:nth-child(1) {
    background: red;
  }

  > button:nth-child(2) {
    background: green;
  }
}
</style>
