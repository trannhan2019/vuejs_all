<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="font-sora">
    <Header />
  </div>
</template>

<style lang="scss">
@use './assets/scss/variables' as *;

.test-apply {
  @apply bg-black;
  height: $header-height;
  @screen sm {
    @apply bg-white;
  }

  p {
    @screen md {
      color: #ccc;
    }
  }
}
</style>
