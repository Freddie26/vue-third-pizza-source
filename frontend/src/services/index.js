import { AddressesService } from "@/services/addresses-service";
import { DoughsService } from "@/services/doughs-service";
import { IngredientsService } from "@/services/ingredients-service";
import { MiscService } from "@/services/misc-service";
import { OrdersService } from "@/services/orders-service";
import { SaucesService } from "@/services/sauces-service";
import { SizesService } from "@/services/sizes-service";

export default {
  addressesService: new AddressesService(),
  doughsService: new DoughsService(),
  ingredientsService: new IngredientsService(),
  miscService: new MiscService(),
  ordersService: new OrdersService(),
  saucesService: new SaucesService(),
  sizesService: new SizesService(),
};
