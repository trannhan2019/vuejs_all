<template>
  <div
    class="section__content"
    :class="props.class"
    :style="props.bgImage"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  bgImage: Object,
});

const bgImage = props.bgImage
  ? { backgroundImage: `url(${props.bgImage})` }
  : {};
</script>

<style lang="scss">
@use '../../assets/scss/components/section';
</style>
