<template>
  <div class="calculator__button">
    <button @click="$emit('KeyPressed', '1')">1</button>
    <button @click="$emit('KeyPressed', '2')">2</button>
    <button @click="$emit('KeyPressed', '3')">3</button>
    <button @click="$emit('KeyPressed', '+')">+</button>
  </div>

  <div class="calculator__button">
    <button @click="$emit('KeyPressed', '4')">4</button>
    <button @click="$emit('KeyPressed', '5')">5</button>
    <button @click="$emit('KeyPressed', '6')">6</button>
    <button @click="$emit('KeyPressed', '-')">-</button>
  </div>

  <div class="calculator__button">
    <button @click="$emit('KeyPressed', '7')">7</button>
    <button @click="$emit('KeyPressed', '8')">8</button>
    <button @click="$emit('KeyPressed', '9')">9</button>
    <button @click="$emit('KeyPressed', '*')">*</button>
  </div>

  <div class="calculator__button">
    <button @click="$emit('KeyPressed', '0')">0</button>
    <button @click="$emit('KeyPressed', 'C')">C</button>
    <button @click="$emit('KeyPressed', '=')">=</button>
    <button @click="$emit('KeyPressed', '/')">/</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
