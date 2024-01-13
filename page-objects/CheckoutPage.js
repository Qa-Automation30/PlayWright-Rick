export class CheckoutPage{
    constructor(page){
        this.page=page
        this.basketCards = page.locator('[data-qa="basket-card"]')
        this.basketItemPrices =page.locator("[data-qa='basket-item-price']")
        this.removeFromBasketButton =page.locator("[data-qa='basket-card-remove-item']")
    }
    removeCheapstIteamFromCart= async ()=>{
       // const count = await this.basketItemPrices.count()
        const allPrices = await this.basketItemPrices.allInnerTexts()
        console.log(allPrices)
       const justNumbers =  allPrices.map((element)=>{
            return Number.parseInt(element.replace('$',''))
        })
        console.log("justNumbers===>",justNumbers)
        const minNumber = Math.min(...justNumbers)
        // const sortedNumbers = justNumbers.sort((a,b)=>{
        //     return a-b
        // })
        // console.log("sortedNumbers===>",sortedNumbers)
       console.log(minNumber)
       const indexOfSmallestNumber = justNumbers.indexOf(minNumber)
       await this.removeFromBasketButton.nth(indexOfSmallestNumber).click()
        // console.log("total products in the cart is-->",count)
        // for(let i=0;i<count;i++){
        //     console.log(await this.basketItemPrices.nth(i).innerText())
        // }
    }
}