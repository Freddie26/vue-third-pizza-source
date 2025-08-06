import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";
import { guardPipeline } from "@/router/guards/guard-pipeline";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

guardPipeline(router);
