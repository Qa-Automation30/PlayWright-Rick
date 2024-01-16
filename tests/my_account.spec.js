import { test } from "@playwright/test";
import { MyAccounPage } from "../page-objects/MyAccountPage";
import { getLoginToken } from "../api-calls/getLoginToken";

test('My account using cookie injection',async ({page})=>{
    // Make a req to login into application and get the token
    const loginToken = await getLoginToken()
    console.log(loginToken) 

    const myAccount = new MyAccounPage(page)
    await myAccount.visit()
})