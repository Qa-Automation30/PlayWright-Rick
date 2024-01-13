import {test,expect} from '@playwright/test'; 

test.skip("Product page add to basket",async ({page})=>{
    await page.goto("/")
    //================================================
    const addToBasketButton = page.locator("//button[@data-qa='product-button']").first()
    const basketCounter = page.locator("[data-qa='header-basket-count']")
    const navigationBar = page.locator("[data-qa='monitor-navigation']")
    const checkOutPageSelector = "[href='/basket']"
    await addToBasketButton.waitFor()
    await expect(basketCounter).toHaveText('0')
    await addToBasketButton.click()
    //================================================
    await expect(addToBasketButton).toHaveText("Remove from Basket")
    console.log(await addToBasketButton.textContent())
    console.log(await basketCounter.textContent())
    await expect(basketCounter).toHaveText("1")
    //=======================================================================
    await navigationBar.locator(checkOutPageSelector).click()
    await page.waitForURL("/basket")
    await expect(page).toHaveURL("/basket")
   // await page.pause()

})
