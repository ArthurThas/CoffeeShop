import { createClient } from "./common/client";

export const coffeeShopApiClient = createClient({
    baseURL: `${import.meta.env.VITE_CoffeeShop_Api_BaseUri}/api`
});