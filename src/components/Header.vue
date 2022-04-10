<template>
  <div class="header">
    <div class="header__inner container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { logo } from '../assets/images';
</script>

<style lang="scss">
@use '../assets/scss/components/header.scss';
</style>
