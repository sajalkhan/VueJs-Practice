<template>
  <pre>
      {{ formValue }}
    </pre
  >
  <div class="container">
    <form @submit="submitForm" class="container--form">
      <div class="container--form__input--name">
        Name: <input type="text" v-model="formValue.name" />
      </div>

      <div class="container--form__input--email">
        Email: <input type="text" v-model="formValue.email" />
      </div>

      <div class="container--form__input--profile">
        Profile:
        <textarea v-model="formValue.profileSummary" />
      </div>

      <div class="container--form__input--country">
        Country:
        <select v-model="formValue.country">
          <option value="">--Select Country --</option>
          <option v-for="(item, indx) in country" :key="indx" :value="item">
            {{ item }}
          </option>
        </select>
      </div>

      <div class="container--form__input--location">
        location:
        <select multiple v-model="formValue.jobLocation">
          <option v-for="(item, indx) in location" :key="indx" :value="item">
            {{ item }}
          </option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          v-model="formValue.remoteWork"
          true-value="yes"
          false-value="no"
        />
        <label>Open for remote work?</label>
      </div>

      <div>
        <label for="skillset">Skill Sets</label> <br />
        <span v-for="(item, indx) in skill" :key="indx">
          <input
            type="checkbox"
            v-model="formValue.skills"
            :value="item.value"
          />
          <label>{{ item.label }}</label>
        </span>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skills: [],
      },
      country: ["Bangladesh", "India", "Japan", "China", "Australia"],
      location: ["Dhaka", "Natore", "Rajshahi", "Chapai"],
      skill: [
        {
          label: "html",
          value: "html",
        },
        {
          label: "css",
          value: "css",
        },
        {
          label: "javascript",
          value: "javascript",
        },
        {
          label: "reactjs",
          value: "reactjs",
        },
        {
          label: "c/c++",
          value: "c/c++",
        },
      ],
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log("form data ", this.formValue);
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

body {
  background: yellow;
}

.container {
  height: 80vh;
  width: 50vw;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 10px;
}

.container--form {
  height: 100%;
  width: 100%;
  background: greenyellow;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container--form__input--name {
  margin-bottom: 10px;
  width: 100%;
}

.container--form__input--email {
  margin-bottom: 10px;
  width: 100%;
}

.container--form__input--profile {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container--form__input--country {
  width: 100%;
  margin-bottom: 10px;
}

.container--form__input--location {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.container--form__input--name input {
  height: 25px;
  width: 50%;
  border: 2px solid grey;
  border-radius: 5px;
}

.container--form__input--email input {
  height: 25px;
  width: 50%;
  border: 2px solid grey;
  border-radius: 5px;
}

.container--form__input--profile textarea {
  height: 25px;
  width: 50%;
  border: 2px solid grey;
  border-radius: 5px;
}

.container--form__input--country select {
  height: 35px;
  width: 50%;
  border: 2px solid grey;
  border-radius: 5px;
}

.container--form__input--location select {
  height: 50px;
  width: 50%;
  border: 2px solid grey;
  border-radius: 5px;
}
</style>
