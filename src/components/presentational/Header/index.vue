<template>
  <header class="header">
    <md-toolbar class="md-primary">
      <h3 
        class="md-title" 
        v-text="$t('title')"/>
    </md-toolbar>
  </header>
</template>
<script>
import messages from './messages';

export default {
  name: 'Header',
  i18n: { messages },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
</style>
