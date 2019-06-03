<template>
  <section class="dashboard">
    <div class="container"></div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import messages from "./messages";

export default {
  name: "Dashboard",
  i18n: { messages },
  computed: {},
  mounted() {
    this.$store.dispatch("dashboard/getProducts");
  },
  methods: {
    updateLocale(e) {
      const locale = e.target.value;
      const payload = {
        locale
      };

      this.$store.dispatch("dashboard/updateLocale", payload);
    }
  }
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

h2,
h3,
h4 {
  margin: 10px 0;
}

p {
  font-weight: 600;
}

a {
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  color: #35485d;
}

input,
button,
a {
  margin-bottom: 10px;
}
</style>
