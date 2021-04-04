<template>
  <div :class="['divStyle']">
    <h2>volume Tracker (0-20)</h2>
    <h2>Current volume - {{ computedVolumeLevel }}</h2>
    <button @click="increase">Increase(+)</button>
    <button @click="decrease">Decrease(-)</button>

    <input type="text" v-model="movieList" />
    <input type="text" v-model="movie" />
    <input type="text" v-model="movieInfo.name" placeholder="movie name" />
    <input type="text" v-model="movieInfo.author" placeholder="movie author" />
    <button @click="AllMovieList.push('thor')">Add movie</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
      movieList: "",
      movie: "batman",
      movieInfo: {
        name: "",
        author: "",
      },
      AllMovieList: ["batman", "spider man", "iron man"],
    };
  },
  methods: {
    increase() {
      if (this.volume < 20 && this.volume >= 0) {
        return (this.volume += 2);
      }
    },
    decrease() {
      if (this.volume >= 2) {
        return (this.volume -= 2);
      }
    },
  },
  computed: {
    computedVolumeLevel: {
      get() {
        return `${this.volume}`;
      },
      set(value) {
        this.volume = value;
      },
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue == 16) {
        alert("Listining to high volume for long time may damage your hearing");
      }
    },
    movieList() {
      console.log(`api call with movie name ${this.movieList}`);
    },
    movie: {
      handler(newValue) {
        console.log(`calling api with movie name ${newValue}`);
      },
      immediate: true, // this tage help us to call this method first tiem when page is loaded
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `calling api with movie name ${newValue.name} and author ${newValue.author}`
        );
      },
      deep: true, //vue can't read object/array value so to understand it we have to set deep: true tag
    },
    AllMovieList: {
      handler(newValue) {
        console.log(`calling api with new pushed movie ${newValue}`);
      },
      deep: true, // to watch array value we have to also add this tag
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list {
  list-style-type: none;
  border: 1px solid black;
  width: 50vw;
}

.divStyle {
  display: grid;
  justify-content: center;
}
</style>
