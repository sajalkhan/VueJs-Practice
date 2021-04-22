<template>
  <div class="hero">
    <h1 class="hero__heading">Dc Heros {{ herosCount }}</h1>
    <ul class="hero__list">
      <li
        class="hero__list--items"
        v-for="(hero, index) in dcHero"
        :key="index"
      >
        <div>{{ hero.name }}</div>
        <button @click="removeHero(index)">x</button>
      </li>
    </ul>

    <form class="hero__form" @submit.prevent="addHero">
      <input
        class="hero__form--input"
        placeholder="Type Hero Name Here.."
        v-model.trim="newHero"
        ref="newHeroRef"
      />
      <button type="submit">Add New Hero</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import "./DcHeros.scss";

export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHero = ref([
      {
        name: "Spider Man",
      },
      {
        name: "Super Man",
      },
      {
        name: "Tarzan",
      },
      {
        name: "Iron Man",
      },
      {
        name: "Thor",
      },
    ]);

    const herosCount = computed({
      get: () => dcHero.value.length,
    });

    const removeHero = (index) => {
      dcHero.value = dcHero.value.filter((hero, i) => i != index);
    };

    const addHero = () => {
      if (newHero.value !== "") {
        dcHero.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    };

    //TODO: here use mounted hook when app is mounted then it wil call and newHeroRef value will focus
    onMounted(() => {
      newHeroRef.value.focus();
    });

    return { newHero, newHeroRef, dcHero, addHero, removeHero, herosCount };
  },
};
</script>
