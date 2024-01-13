import { expect, test } from '@playwright/test';
import { ProductsPage } from '../page-objects/ProductsPage.js';
import { NavigationPage } from '../page-objects/NavigationPage.js'


test.skip("New Use full end to end journey", async ({ page }) => {
    /**
     *  1-> Here create an Object of the Products page and pass the page via its constructor
     *  2-> in next step visit the products page
     */
    const productsPage = new ProductsPage(page)
    await productsPage.visit()
    /**
     * 7-> Sort the prices as per passing parameters
     */
    await productsPage.sortByCheapst('price-asc')
    /**
     * 7 ->> Sort the products page as per its prices
     */
    await page.pause()

})