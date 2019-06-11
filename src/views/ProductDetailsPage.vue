

<template>
  <main>
    <ProductDetails/>
  </main>
</template>

<script>
const ProductDetails = () => import('@/components/container/ProductDetails');
export default {
  name: 'ProductDetailsPage',
  components: {
    ProductDetails,
  },
};
</script>

<style lang="scss" scoped>

</style>
