<template>
  <logo></logo>
    <slot></slot>
  <foot></foot>
</template>

<script>
import logo from './logo';
import foot from './foot';

export default {
  components: {
    logo,
    foot,
  },
};
</script>

<style lang="scss" scoped>
</style>
