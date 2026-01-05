<script setup>
definePageMeta({
  middleware: ["admin", "auth"],
  layout: "dashboard",
});

import { useProductStore } from "~/stores/product";
import { ref, onMounted } from "vue";

const useProduct = useProductStore();
const { formatDate } = useDateTime();
const productDatas = ref([]);
const paginateProds = ref({});
const searchFilter = ref("");
const status = ref("");

onMounted(async () => {
  const response = await useProduct.fetchProductsAdmin();
  productDatas.value = response.data;
  paginateProds.value = response.pagination;
});

useHead({
  script: [
    {
      src: "/libs/simplebar/dist/simplebar.min.js",
      body: true,
    },
    {
      src: "/js/theme.min.js",
      body: true,
    },
  ],
});
</script>

<template>
  <div class="container">test</div>
</template>

<style scoped></style>
