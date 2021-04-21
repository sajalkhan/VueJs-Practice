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
        class="hero__input"
        placeholder="Type Hero Name Here.."
        v-model="newHero"
        ref="newHeroRef"
      />
      <button type="submit" class="hero__button">Add New Hero</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

export default {
  name: "DcHero",

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

<style scoped>
.hero__list--items {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.hero__list--items > button {
  background-color: red;
  color: white;
  cursor: pointer;
  border: 0;
  outline: none;
}

.hero__form {
  display: flex;
  justify-content: space-between;
}

.hero__input {
  height: 20px;
  margin-right: 5px;
  padding: 2px 5px 5px 5px;
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;
}

.hero__button {
  border: 0;
  outline: none;
  background: violet;
  color: black;
  cursor: pointer;
  border-radius: 5px;
}

.hero__button:hover {
  background: green;
  color: white;
}
</style>
