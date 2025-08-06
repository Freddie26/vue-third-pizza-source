import { defineStore } from "pinia";
import { pizzaPrice } from "@/common/helpers/pizza-price";
import { useDataStore } from "@/stores/data";
import { useAuthStore } from "@/stores/auth";
import { addressesService, ordersService } from "@/services";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    addresses: [],
    orders: [],
  }),
  getters: {
    ordersExtended: (state) => {
      const dataStore = useDataStore();

      return state.orders.map((order) => {
        const orderPizzas = order.orderPizzas?.map((pizza) => {
          return {
            name: pizza.name,
            quantity: pizza.quantity,
            dough: dataStore.doughs.find((i) => i.id === pizza.doughId),
            size: dataStore.sizes.find((i) => i.id === pizza.sizeId),
            sauce: dataStore.sauces.find((i) => i.id === pizza.sauceId),
            ingredients: pizza.ingredients.map((ingredient) => {
              return {
                ...dataStore.ingredients.find(
                  (i) => i.id === ingredient.ingredientId,
                ),
                quantity: ingredient.quantity,
              };
            }),
            price: pizzaPrice(pizza),
          };
        });

        const orderMisc =
          order.orderMisc?.map((misc) => {
            return {
              ...dataStore.misc.find((item) => item.id === misc.miscId),
              quantity: misc.quantity,
            };
          }) ?? [];

        const pizzaPrices =
          orderPizzas
            ?.map((item) => item.quantity * item.price)
            .reduce((acc, val) => acc + val, 0) ?? 0;

        const miscPrices =
          orderMisc
            ?.map((item) => item.quantity * item.price)
            .reduce((acc, val) => acc + val, 0) ?? 0;

        return {
          ...order,
          orderPizzas,
          orderMisc,
          total: pizzaPrices + miscPrices,
        };
      });
    },
  },
  actions: {
    setAddresses(addresses) {
      this.addresses = addresses;
    },
    setOrders(orders) {
      this.orders = orders;
    },
    async loadOrders() {
      const response = await ordersService.getOrders();
      if (response.__state === "success") {
        this.setOrders(response.data);
      }
    },
    async removeOrder(orderId) {
      const response = await ordersService.removeOrder(orderId);
      if (response.__state === "success") {
        this.orders = this.orders.filter((i) => i.id !== orderId);
      }
    },
    async addAddress(address) {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated) {
        return;
      }

      const response = await addressesService.addAddress({
        ...address,
        userId: authStore.user.id,
      });
      if (response.__state === "success") {
        this.addresses.push(response.data);
      }
    },
    async removeAddress(addressId) {
      const response = await addressesService.removeAddress(addressId);
      if (response.__state === "success") {
        this.addresses = this.addresses.filter((i) => i.id !== addressId);
      }
    },
    async updateAddress(address) {
      const response = await addressesService.updateAddress(address);
      if (response.__state === "success") {
        this.addresses = this.addresses.map((i) =>
          i.id === address.id ? address : i,
        );
      }
    },
  },
});
