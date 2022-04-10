<template>
  <button class="btn" :class="props.class">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>

<style lang="scss">
@use '../assets/scss/components/button';
</style>
