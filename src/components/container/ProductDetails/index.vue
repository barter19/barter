

<template>
  <main>
    <section class="productDetails">
      <div>
        <img src="../../../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
      </div>
      <div class="productDetails">
        <h2>Product Name</h2>
        <p>A mobile phone is a wireless handheld device that allows users to make and receive calls and to send text messages, among other features. The earliest generation of mobile phones could only make and receive calls.</p>
        <md-field>
          <label>Sale Type</label>
          <md-input v-model="saleType" readonly>Exchange</md-input>
        </md-field>
        <Exchange/>
        <Bid/>
      </div>
    </section>
  </main>
</template>

<script>
import messages from "./messages";
const Exchange = () =>
  import("@/components/container/ProductDetails/exchange");
const Bid = () =>
  import("@/components/container/ProductDetails/bid");

export default {
  name: "ProductDetails",
  i18n: { messages },
  data: () => ({
    saleType: "Exchange"
  }),
  components: {
    Exchange,
    Bid
  }
};
</script>

<style lang="scss" scoped>
.productDetails {
  margin-bottom: 20px;
  margin: 0 auto;
}
.productDetails {
  margin: 5%;
}

.footer {
  display: grid;
  width: 75%;
  margin: 0 auto;
}
</style>
