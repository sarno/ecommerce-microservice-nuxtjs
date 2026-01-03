<template>
  <section class="my-10">
    <div class="container">
      <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
        <div class="w-full md:w-1/3 xl:w-1/3 lg:order-1 order-2">
          <!-- img -->
          <img
            src="~/assets/images/svg-graphics/signin-g.svg"
            alt=""
            class="max-w-full h-auto"
          />
        </div>
        <div
          class="w-full md:w-1/2 lg:mx-1/6 xl:w-1/4 lg:order-2 order-1 flex flex-col gap-6"
        >
          <div class="flex flex-col gap-1">
            <h1 class="text-xl">Selamat Datang</h1>
            <p>Untuk melanjutkan, silahkan masuk</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = async () => {};
try {
  await authStore.signin(email.value, password.value);
  if (authStore.user?.role === "admin") {
    router.push("/dashboard");
  } else {
    router.push("/");
  }
} catch (error) {
  console.error("Login error:", error);
}
</script>

<style scoped></style>
