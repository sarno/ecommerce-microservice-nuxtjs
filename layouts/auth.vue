<script setup lang="ts">
import Footer from "~/components/common/Footer.vue";
const route = useRoute();
const isSignup = computed(() => route.path === "/auth/signin");
</script>

<style scoped></style>

<template>
  <main>
    <div class="border-b shadow-sm">
      <nav
        class="relative md:flex flex-wrap w-full items-center py-3 text-center"
      >
        <div class="container sm:flex justify-between items-center">
          <a class="inline-block mr-4 text-lg whitespace-no-wrap" href="/">
            <img
              src="~/assets/images/logo/freshcart-logo.svg"
              alt=""
              class="inline-block align-text-top"
            />
          </a>
          <span v-if="!isSignup" class="inline-block">
            Sudah punya akun?
            <a href="signin" class="text-green-600">Masuk</a>
          </span>
        </div>
      </nav>
    </div>

    <slot />
  </main>
  <Footer />
</template>
