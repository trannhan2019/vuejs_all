<template>
  <div class="section" :class="props.class">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>

<style lang="scss">
@use '../../assets/scss/components/section';
</style>
