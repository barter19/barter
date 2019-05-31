

<template>
  <main>
    <Registration/>
  </main>
</template>

<script>
const Registration = () => import('@/components/container/Registration');
export default {
  name: 'RegistrationPage',
  components: {
    Registration,
  },
};
</script>

<style lang="scss" scoped>

</style>
