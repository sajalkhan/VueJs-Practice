<template>
  <div>
    <h4>user first name: {{ d_firstName }}</h4>
    <h4>composition first name: {{ s_firstName }}</h4>
    <!--here composition api automatically get .value property -->
    <h4>composition first name: {{ testName }}</h4>

    <!--using state value -->
    <h5>composition state: {{ state.firstName }} - {{ state.lastName }}</h5>
    <h5>composition reactive data: {{ userInfo }}</h5>

    <!-- get data from composition api function -->
    <button @click="incrementCount">Click {{ count }} times</button>
    <h5>
      {{ email }} <br />
      {{ phone }}
    </h5>

    <div>
      <input
        type="email"
        placeholder="email"
        :value="email"
        @input="updateEmail($event.target.value)"
      />
      <br />
      <br />
      <input
        type="text"
        :value="phone"
        @input="updatePhone($event.target.value)"
        placeholder="phone"
      />
    </div>

    <div>
      <!-- uss of comuted property usign composition property -->
      <br /><br />
      <input type="text" v-model="designation" /> <br />
      <input type="text" v-model="salary" />
      <h2>User info: {{ designation }} {{ salary }}</h2>
      <h5>replace computed property usign composition api</h5>
      <input type="text" v-model="designation" /> <br />
      <input type="number" v-model="salary" />
      <h5>
        composition api using computed property user info: {{ userFullInfo }}
      </h5>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, computed } from "vue"; // ref, reactive is work like as data or it can replace data property

//?https://forum.vuejs.org/t/vue-3-controlled-input-how-do-i-forceupdate-or-use-customref-to-always-trigger-on-set/96280

const useOfCompositionApi = () => {
  //replace method options using composition api
  const count = ref(0);
  const incrementCount = () => {
    count.value++;
  };

  const state2 = reactive({
    email: "sajal@gmail.com",
    phone: "01740980351",
  });

  const updateEmail = (e) => {
    state2.email = e;
  };

  const updatePhone = (e) => {
    state2.phone = e;
  };

  return {
    count,
    state2,
    incrementCount,
    updateEmail,
    updatePhone,
  };
};

export default {
  name: "Practice",
  //composition api
  setup() {
    const s_firstName = ref("tarzan"); // ref is use mainly for constant type of data. it can't contain object tpe of data
    const s_lastName = ref("khan");
    s_firstName.value = "sajal";
    console.log("first name : ", s_firstName);
    const testName = `hello  ${s_firstName.value}  ${s_lastName.value}`;

    //use of reactive --> it's accept only object
    const state = reactive({
      firstName: "sajal",
      lastName: "khan",
      type: "user",
    });

    const userInfo = `hello ${state.firstName} ${state.lastName} - user type: ${state.type}`;

    // composition api replace method way
    const {
      count,
      incrementCount,
      state2,
      updateEmail,
      updatePhone,
    } = useOfCompositionApi();

    const userData = reactive({
      designation: "",
      salary: "",
    });

    const userFullInfo = computed(() => {
      return `${userData.designation} ${userData.salary}`;
    });

    return {
      s_firstName,
      testName,
      state,
      userInfo,
      count,
      incrementCount,
      ...toRefs(state2), //toRefs allow us to bind state value without state.name in this
      updateEmail,
      updatePhone,
      ...toRefs(userData),
      userFullInfo,
    };
  },
  data() {
    return {
      d_firstName: "sinbad",
    };
  },
};
</script>

<style scoped></style>
