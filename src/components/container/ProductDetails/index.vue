

<template>
  <main>
    <link
      href="https://rawgit.com/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css"
      rel="stylesheet">
    <section class="productDetails">
      <div>
        <img src="../../../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
      </div>
      <div class="productDetails">
        <h2>Product Name</h2>
        <p>A mobile phone is a wireless handheld device that allows users to make and receive calls and to send text messages, among other features. The earliest generation of mobile phones could only make and receive calls.</p>
        <md-field>
          <label>Sale Type</label>
          <md-input v-model="saleType" readonly></md-input>
        </md-field>
        <div v-if="saleType=='Exchange'">
          <Exchange/>
        </div>
        <div v-if="saleType=='Bid'">
          <Bid/>
        </div>
        <div class="react">
          <i class="twa twa-heart"></i>
          <i class="twa twa-angry"></i>
          <i class="twa twa-thumbsup"></i>
          <i class="twa twa-thumbsdown"></i>
        </div>
        <div>
          <h4 style="float:left">Comments</h4>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>
            <div class="md-list-item-text">
              <span>Ali Connors</span>
              <span>Brunch this weekend?</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">star</md-icon>
            </md-button>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>

        </div>

        <md-field>
            <label>Comment here...</label>
            <md-textarea v-model="textarea"></md-textarea>
          </md-field>
          <md-button>Submit</md-button>
      </div>
    </section>
  </main>
</template>

<script>
import messages from "./messages";
const Exchange = () => import("@/components/container/ProductDetails/exchange");
const Bid = () => import("@/components/container/ProductDetails/bid");

export default {
  name: "ProductDetails",
  i18n: { messages },
  data: () => ({
    saleType: "Bid"
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
h2 {
  color: #09512a;
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

