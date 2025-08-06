import { defineStore } from "pinia";
import { useProfileStore } from "@/stores/profile";
import { tokenService } from "@/services/token-service";
import { addressesService, authService, ordersService } from "@/services";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated() {
      return !!this.user;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },

    async login(credentials) {
      const response = await authService.login(credentials);
      if (response.__state === "success") {
        tokenService.save(response.data.token);
        return "success";
      } else {
        return response.data.message;
      }
    },

    async logout() {
      await authService.logout();
      tokenService.remove();
      authService.setAuthHeader("");
      this.user = null;
    },

    async whoAmI() {
      authService.setAuthHeader(tokenService.get());
      const profileStore = useProfileStore();

      /* Выполняем цепочку действий по получению данных, необходимых для нормальной работы приложения */
      const profileResponse = await authService.whoAmI();
      if (profileResponse.__state !== "success") {
        await this.logout();
        return;
      } else {
        this.setUser(profileResponse.data);
      }

      const addressesResponse = await addressesService.getAddresses();
      if (addressesResponse.__state !== "success") {
        await this.logout();
        return;
      } else {
        profileStore.setAddresses(addressesResponse.data);
      }

      const ordersResponse = await ordersService.getOrders();
      if (ordersResponse.__state !== "success") {
        await this.logout();
      } else {
        profileStore.setOrders(ordersResponse.data);
      }
    },
  },
});
