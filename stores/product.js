import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    product: {},
    loading: false,
    error: null,
    pagination: {
      page: 1,
      total_count: 0,
      per_page: 10,
      total_pages: 0,
    },
  }),

  actions: {
    async fetchProductsHome() {
      try {
        this.loading = true;
        const response = await fetch(
          `${useRuntimeConfig().public.apiProductBaseUrl}/products/home`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();

        this.products = result.data;

        return result;
      } catch (err) {
        this.error = err.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async fetchProductsAdmin(params = {}) {
      try {
        this.loading = true;

        const { search, page, limit, status, orderBy, category } = params;

        const query = new URLSearchParams();
        if (search) query.append("search", search);
        if (page) query.append("page", page);
        if (limit) query.append("limit", limit);
        if (status) query.append("status", status);
        if (orderBy) query.append("orderBy", orderBy);
        if (category) query.append("category", category);

        const response = await fetch(
          `${
            useRuntimeConfig().public.apiProductBaseUrl
          }/admin/products?${query.toString()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${useCookie("token").value}`,
            },
          }
        );

        const result = await response.json();
        this.products = result.data;
        this.pagination = result.pagination;

        return result;
      } catch (err) {
        this.error = err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
