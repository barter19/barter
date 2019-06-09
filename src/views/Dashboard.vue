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
        <carousel :autoplay="true" :nav="false" :items="1" :loop="true" class="header-carousel">
          <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">

          <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">

          <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
        </carousel>
        <md-tabs md-alignment="centered">
          <md-tab
            id="tab-exchange"
            md-label="Exchange"
            @click="activetab=1"
            v-bind:class="[ activetab === 1 ? 'active' : '' ]"
          >
            <section v-if="activetab === 1">
              <h2>Latest Items On Exchange</h2>
              <carousel
                :nav="false"
                :dots="false"
                :items="2"
                :responsive="{0:{items:2,nav:false},600:{items:5,nav:true}}"
              >
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 1</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 2</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 3</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 4</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 5</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </carousel>
              <h2>Popular Items On Exchange</h2>
              <carousel
                :nav="false"
                :dots="false"
                :items="2"
                :responsive="{0:{items:2,nav:false},600:{items:5,nav:true}}"
              >
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 1</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 2</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 3</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 4</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 5</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </carousel>
            </section>
          </md-tab>
          <md-tab
            id="tab-auction"
            md-label="Auction"
            @click="activetab=2"
            v-bind:class="[ activetab === 2 ? 'active' : '' ]"
          >
            <section v-if="activetab === 2">
              <h2>Latest Items On Auction</h2>
              <carousel
                :nav="false"
                :dots="false"
                :items="2"
                :responsive="{0:{items:2,nav:false},600:{items:5,nav:true}}"
              >
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 1</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 2</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 3</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 4</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 5</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </carousel>
              <h2>Popular Items On Auction</h2>
              <carousel
                :nav="false"
                :dots="false"
                :items="2"
                :responsive="{0:{items:2,nav:false},600:{items:5,nav:true}}"
              >
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 1</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 2</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 3</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 4</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
                <md-card>
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="4:3">
                      <img src="../static/assets/img/icons/icon-192x192.png" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">PRODUCT 5</span>
                        <span class="md-subhead">4/3 image</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-card>
              </carousel>
            </section>
          </md-tab>
        </md-tabs>
        <section>
          <md-button class="md-raised md-primary">Submit A Product</md-button>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState, mapGetters } from 'vuex';

export default {
  name: "Dashboard",
  components: { carousel },
  data: function() {
    return { activetab: 1 };
  },
  mounted() {
    this.$store.dispatch('getExchangeProducts');
    console.log(this.chatId);
  },
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
  .owl-stage-outer {
    position: relative;
    z-index: 10;
  }

  .owl-theme .owl-dots {
    position: relative;
    z-index: 99;
    margin-top: -26px;
  }
  .owl-theme .owl-nav.disabled + .owl-dots {
    position: relative;
    z-index: 99;
    margin-top: -26px;
  }
}
.owl-theme .owl-dots {
  position: relative;
  z-index: 99;
  margin-top: -26px;
}

.md-card {
  width: 150px;
  margin: 20px 5px;
  display: inline-block;
  vertical-align: middle;
}

md-tab .active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}
</style>
