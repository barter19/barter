<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/presentational/Header";
import Footer from "@/components/presentational/Footer";

export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: white;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
}
</style>
