import { expect, test } from '@playwright/test';
import { ProductsPage } from '../page-objects/ProductsPage.js';
import { NavigationPage } from '../page-objects/NavigationPage.js'
import { CheckoutPage } from '../page-objects/CheckoutPage.js';

test.only("New Use full end to end journey", async ({ page }) => {
    /**
     *  1-> Here create an Object of the Products page and pass the page via its constructor
     *  2-> in next step visit the products page
     */
    const productsPage = new ProductsPage(page)
    const navigationPage = new NavigationPage(page)
    await productsPage.visit()
    /**
     *  3-> Now adding products to the basket via indexing
     */
    await expect(await productsPage.returnTheText(0)).toHaveText("Add to Basket")
    await productsPage.addProductToBasket(0)
    await expect(await productsPage.returnTheText(0)).toHaveText("Remove from Basket")
    /**
     * 4-> Fetch the count that how many products are adding into cart
     */
    const basketCount = await navigationPage.getBasketCount()
    console.log(basketCount)
    expect(basketCount).toBeGreaterThan(0)
   // await page.pause()
    //==========================================================================
    /**
    *  3-> Now adding products to the basket via indexing
    */
    await expect(await productsPage.returnTheText(1)).toHaveText("Add to Basket")
    await productsPage.addProductToBasket(1)
    await expect(await productsPage.returnTheText(1)).toHaveText("Remove from Basket")
    //==========================================================================
    /**
    *  3-> Now adding products to the basket via indexing
    */
    await expect(await productsPage.returnTheText(2)).toHaveText("Add to Basket")
    await productsPage.addProductToBasket(2)
    await expect(await productsPage.returnTheText(2)).toHaveText("Remove from Basket")
    const basketCount1 = await navigationPage.getBasketCount()
    console.log(basketCount1)
    //====================================================================
    /**
     * 5-> Navigate to checkoutPage
     */
    const checkoutPage = await navigationPage.gotoCheckoutPage()
    /**
     * 6-> On checkout page select the lowest price iteam and remove it fron the cart
     * Note : This is imp method need to learn
     */
    await checkoutPage.removeCheapstIteamFromCart() 
    /**
     * 8->
     */
    await page.pause()

})