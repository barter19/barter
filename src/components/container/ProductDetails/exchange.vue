<template>
<section class="exchange">
  <md-field>
      <label>Preffered Exchange</label>
      <md-input v-model="prefferedExchange" readonly></md-input>
  </md-field>
  <md-button @click="submitExchange=true">Add Exchange Item</md-button>
  <div v-if="submitExchange">
  <!-- <GetStarted/> -->
  </div>
</section>

</template>

<script>
// const GetStarted = () =>
//   import("@/components/container/Registration/getStarted");
export default {
  name: "Exchange",
   data: () => ({
    prefferedExchange: "Phone",
    submitExchange: false
  }),
  methods: {
    addExchange(e){

    }
  },
  components:{
    // GetStarted
  }
};
</script>
