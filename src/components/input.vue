<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <p v-if="modelValue.length">child: {{ modelValue }}</p>
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: String,
  },
};
</script>

<style scoped></style>
