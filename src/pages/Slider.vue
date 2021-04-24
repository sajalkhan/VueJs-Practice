<template>
  <div class="slide">
    <div class="slide__items" v-for="(slide, indx) in slides" :key="indx">
      <transition name="fade">
        <div
          :class="slide"
          v-if="currentSlide === indx"
          style="height:350px"
        ></div>
      </transition>
    </div>

    <div class="slide__all">
      <div class="slide__all--slider">
        <div
          :class="[
            `slide__all--slider--button${indx}`,
            currentSlide == indx ? 'bgGray' : 'bgWhite',
          ]"
          v-for="(slide, indx) in slides"
          @click="makeActiveIndex(indx)"
          :key="indx"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import "./slider.scss";

export default {
  data() {
    return {
      currentSlide: 0,
      slides: ["slide_1", "slide_2", "slide_3"],
      interval: "",
    };
  },
  methods: {
    makeActiveIndex(indx) {
      this.currentSlide = indx;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 5000);
  },

  //TODO: also we can use beforeUnmount lifecycle hooks for clear interval
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>
