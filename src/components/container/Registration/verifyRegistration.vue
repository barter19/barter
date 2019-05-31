<i18n>
{
  "en": {
    "title": "Products!",
    "tab-title-1": "Exchange",
    "tab-title-2": "Auction"
  }
}
</i18n>

<template>
  <main>
    <section class="dashboard">
      <div class="container">
          <a href='http://t.me/varun90bot' target='_blank'>Click Here To Continue</a>
      </div>
    </section>
  </main>
</template>

<script>

import carousel from "vue-owl-carousel";

export default {
  name: "VerifyRegistration",
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin-bottom: 20px;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
}

.header-carousel {
  .owl-carousel .owl-item img {
    max-height: 200px;
  }
}

.md-card {
  width: 150px;
  margin: 20px 5px;
  display: inline-block;
  vertical-align: middle;
}
</style>
