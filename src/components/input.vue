<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <!-- @input="$emit('update:modelValue', $event.target.value)" this is doing everything -->
  <p v-if="modelValue.length">child: {{ modelValue }}</p>
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: String,
  },
  //get that v-model as a modelValue it's a default nature of vuejs
};
</script>

<style scoped></style>
