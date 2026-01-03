<script setup>
import Footer from "~/components/common/Footer.vue";
import Header from "~/components/common/Header.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
