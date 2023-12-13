import { coffeeShopApiClient } from "./coffeeShopApiClient";

export const coffees = {
    getCoffees: () => coffeeShopApiClient.get('/Coffees')
}