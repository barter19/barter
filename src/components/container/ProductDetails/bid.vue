<template>
  <section class="bid">
    <md-field>
      <label>Minimum bid amount</label>
      <md-input v-model="minBid" readonly></md-input>
    </md-field>
    <md-button @click="enteringBid= true" type="submit">Place Bid</md-button>
    <div v-if="enteringBid">
      <md-field>
        <label>Place your bid</label>
        <md-input></md-input>
      </md-field>
      <md-button class="md-raised md-primary" @click="submitBid" type="submit">Submit</md-button>
    </div>
  </section>
</template>

<script>

export default {
  name: "Bid",
  data: () => ({
    minBid: "1000",
    enteringBid: false
  }),
  methods:{
    submitBid(e){

    }
  }
};
</script>
