

<template>
  <main>
      <GetStarted/>
  </main>
</template>

<script>
const GetStarted = () => import('@/components/container/Registration/getStarted');

export default {
  name: "Registration",
  components: {
    GetStarted,
  }
};
</script>

<style lang="scss" scoped>

</style>
