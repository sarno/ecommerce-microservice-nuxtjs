export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.checkAuth();

  if (
    !authStore.user?.role ||
    !["admin", "Super Admin"].includes(authStore.user.role)
  ) {
    return navigateTo("/");
  }
});
