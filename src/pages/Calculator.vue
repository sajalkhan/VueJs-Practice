<template>
  <div class="calculator">
    <h1 class="calculator__heading" :style="{ color: `${randomColor}` }">
      Calculator
    </h1>

    <textarea disabled class="calculator__result" :value="Result" />

    <CalculatorButton @KeyPressed="pressed" />
  </div>
</template>

<script>
import "./Calculator.scss";
import CalculatorButton from "../components/CalculatorButton";
import { calculateResult } from "../utilities/mixins/calculateResult";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  setup() {
    let interval = ref("");
    const randomColor = ref("");
    const Result = ref("0");
    const operations = ["+", "-", "*", "/"];

    const pressed = (val) => {
      if (val === "=") {
        Result.value = calculateResult(Result.value);
      } else if (val === "C") Result.value = "0";
      else if (operations.includes(val)) {
        Result.value += val;
      } else Result.value += val;
    };

    onMounted(() => {
      interval.value = setInterval(() => {
        // randomColor.value = Math.floor(Math.random() * 16777215).toString(16);
        var R = Math.floor(Math.random() * 256 + 0);
        var G = Math.floor(Math.random() * 256 + 0);
        var B = Math.floor(Math.random() * 256 + 0);
        var Color = `rgb(${R}, ${G}, ${B})`;
        randomColor.value = Color;
      }, 900);
    });

    onUnmounted(() => {
      clearInterval(interval.value);
    });

    return { randomColor, pressed, Result };
  },
  components: {
    CalculatorButton,
  },
};
</script>

<style scoped></style>
