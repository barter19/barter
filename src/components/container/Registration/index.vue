

<template>
  <main>
     <GetStarted/>
    <VerifyRegistration/>
  </main>
</template>

<script>
const GetStarted = () => import('@/components/container/Registration/getStarted');
const VerifyRegistration =() => import('@/components/container/Registration/verifyRegistration');

export default {
  name: "Registration",
  components: {
    GetStarted,
    VerifyRegistration
  }
};
</script>

<style lang="scss" scoped>
</style>
