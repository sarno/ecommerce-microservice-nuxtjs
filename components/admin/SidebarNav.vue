<script setup>
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";
import IconHome from "./IconHome.vue";
import IconUsers from "./IconUsers.vue";
import IconShoppingBag from "./IconShoppingBag.vue";
import IconList from "./IconList.vue";
import IconStore from "./IconStore.vue";

const authStore = useAuthStore();
const router = useRouter(); // Assuming you have a router instance set up in your Vue app

const storeManagementItems = [
  {
    label: "Products",
    path: "/dashboard/products",
    icon: IconStore,
  },
  {
    label: "Categories",
    path: "/dashboard/categories",
    icon: IconList,
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: IconShoppingBag,
  },
  {
    label: "Customers",
    path: "/dashboard/customers",
    icon: IconUsers,
  },
];
</script>

<template>
  <nav class="navbar-vertical-nav hidden xl:block">
    <div class="navbar-vertical">
      <div class="px-4 py-5">
        <NuxtLink to="/" class="navbar-brand">
          <img
            src="~/assets/images/logo/freshcart-logo.svg"
            alt="FreshCart Logo"
          />
        </NuxtLink>
      </div>
      <div class="navbar-vertical-content flex-grow-1">
        <ul class="navbar-nav flex-col" id="sideNavbar">
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: $route.path === '/dashboard' }"
              to="/dashboard"
            >
              <div class="flex items-center">
                <span class="nav-link-icon">
                  <IconHome />
                </span>
                <span class="nav-link-text">Dashboard</span>
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item mt-6 mb-3">
            <span class="nav-label">Store Managements</span>
          </li>
          <li
            v-for="(item, index) in storeManagementItems"
            :key="index"
            class="nav-item"
          >
            X
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
