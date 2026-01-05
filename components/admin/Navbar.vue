<script setup>
const emit = defineEmits(["toggle-sidebar"]);
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-glass"></nav>
</template>
