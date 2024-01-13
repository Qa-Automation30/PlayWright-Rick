import { CheckoutPage } from "./CheckoutPage";

export class NavigationPage{
    constructor(page){
        this.page=page
        this.basketCounter = page.locator("[data-qa='header-basket-count']")
        this.navigationBar = page.locator("[data-qa='monitor-navigation']")
    }
    getBasketCount = async()=>{
        const text = await this.basketCounter.innerText();
        return Number.parseInt(text)
      }

      gotoCheckoutPage = async ()=>{
       await this.navigationBar.locator("[href='/basket']").click()
       return new CheckoutPage(this.page)
      }
}