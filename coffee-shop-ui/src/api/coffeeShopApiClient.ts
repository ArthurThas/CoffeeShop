import { APP_CONFIG } from "@constants";
import { createClient } from "./common/client";

export const coffeeShopApiClient = createClient({
    baseURL: `${APP_CONFIG.CoffeeShopApiBaseUri}/api`
});