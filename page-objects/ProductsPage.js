 export class ProductsPage{
    constructor(page){
        this.page=page
        this.addButtons = page.locator("[data-qa='product-button']")
        this.sortDropdown =page.locator(".sort-dropdown")
    }

      visit = async ()=>{
        await this.page.goto("/")
    }
    addProductToBasket = async(index)=>{
      await this.addButtons.nth(index).waitFor()
      await this.addButtons.nth(index).click()
    }

    returnTheText= async (index)=>{
      return await this.addButtons.nth(index)
    }
    sortByCheapst = async (sortByValue)=>{
      this.sortDropdown.waitFor()
      await this.sortDropdown.selectOption(sortByValue)
    }
  
}