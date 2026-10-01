import {test,expect,Locator} from '@playwright/test'
test("verify the pw actions",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const name:Locator = page.getByPlaceholder("Enter Name")  //using the pwinbuilt 
    const nameCSS:Locator = page.locator("#name")
    await expect(nameCSS).toBeVisible()
    await nameCSS.fill("Nerella Rahul Goud")
})