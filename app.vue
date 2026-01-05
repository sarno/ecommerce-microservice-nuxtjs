<script setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
authStore.checkAuth();
</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
