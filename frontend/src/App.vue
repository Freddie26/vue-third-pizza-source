<template>
  <app-layout>
    <router-view v-if="isLoaded" />
  </app-layout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import { tokenService } from "@/services/token-service";
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDataStore } from "@/stores";

const route = useRoute();
const router = useRouter();
const dataStore = useDataStore();
const isLoaded = ref(false);

const checkLoggedIn = async () => {
  const authStore = useAuthStore();
  const token = tokenService.get();
  if (!token) {
    isLoaded.value = true;
    return;
  }

  try {
    await authStore.whoAmI();
    const { redirect } = route.query;
    await router.push(redirect ? redirect : { name: "home" });
  } catch (e) {
    tokenService.remove();
    console.error(e);
  } finally {
    isLoaded.value = true;
  }
};

onMounted(() => {
  checkLoggedIn();
  dataStore.loadData();
});
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
