<template>
  <div class="header">
    <div class="header__inner container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" />
      </div>
      <ul class="header__nav">
        <li><a href="#">overview</a></li>
        <li><a href="#">news</a></li>
        <li><a href="#">champions</a></li>
        <li><a href="#">support</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { logo } from '../assets/images';
import Button from './Button.vue';
</script>

<style lang="scss">
@use '../assets/scss/components/header';
</style>
