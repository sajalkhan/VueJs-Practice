<template>
  <section @click="close" class="bg-background" />
  <div class="modal-contents">
    <div>
      <slot name="closeBtn"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("close-modal");
    };

    return { close };
  },
};
</script>

<style scoped>
.bg-background {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.modal-contents {
  height: 60%;
  width: 35%;
  background-color: white;
  text-align: center;
  padding: 20px;
  position: absolute;
  top: 10%;
  transform: translate(95%, 10%);
  border-radius: 4px;
}
</style>
