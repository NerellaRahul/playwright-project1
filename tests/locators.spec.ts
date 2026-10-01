
// Locators are the central piece of Playwright's
//  auto-waiting and retry-ability. In a nutshell,
//   locators represent a way to find element(s) on the page at any moment.

// These are the recommended built-in locators.
// Locators identify the object
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).



// Dom is the Document Object Model 
// It is an API interface provided by the Browser
// when page is loaded the Dom is created 
import {test,expect, Locator} from '@playwright/test'
import { userInfo } from 'node:os'



test("verify the locators", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//-------- page.getByAltText() to locate an element, usually image, by its text alternative.
// const img:Locator = await page.getByAltText("logo") 
// 'await' has no effect on the type of this expression.
const img:Locator =  page.getByAltText("logo")
// 1) here we are not using the await because of the Locator(not promise) for only promise returned we use the await
// 2) if there is no action performed we don't use the locators(not involved in any action )
 await expect (img).toBeVisible() //it is promise of void type and performing action so await used

 //----// page.getByText() to locate by text content.
 const loc2:Locator = page.getByText("Name")
//   const loc3:Locator = page.getByText(/Welcome/s+to/s+our/s+Store/i)
// NON interactive elements (clicking is possible)
//  find element by text it contains, you can match by substring
//  excat string locate by visible text use the locator to find the interactive element div , span, p etc 
//  for the interactive elements like button , a , input etc use the role locators 
await expect(loc2).toBeVisible()
// <p>name</p>
// <h3> welcome </h3>

//-----------// page.getByRole() to locate by explicit and implicit accessibility attributes.

// Interactive elements a , button, links Radio dropdown chackboxs
// list tables and many more follow the aria role
// role is based on the element type 
// for the every interative element there is a predefined role

// Role locators include buttons, checkboxes, headings, links, lists, tables, 
// and many more and follow W3C specifications for ARIA role, ARIA attributes and accessible name. 
// Note that many html elements like <button> have an implicitly defined role that is recognized by the role locator.

const loc3:Locator = page.getByRole("link",{name:"Register"})
await loc3.click()
await expect(page.getByRole("heading",{name:'Register'})).toBeVisible()



// page.getByLabel() to locate a form control by associated label's text.

await page.getByLabel('firstname').fill("rahul")
await page.getByLabel('lastname').fill('nerella')


// page.getByPlaceholder() to locate an input by placeholder.
//an attribute of an element is attribute 
await page.getByPlaceholder('search').fill('balls')
// page.getByTitle() to locate an element by its title attribute.#title is an attribute 
await page.goto("xxxxxxxxx.com")
const loc6:Locator = page.getByTitle('Home')
await expect(loc6).toHaveText("Home")
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
//when the text or the role-based locators are unstable or not suitable.

// await page.goto("xxxxxxxxx.com")
const loc7:Locator = page.getByTestId('Home')
await expect(loc6).toHaveText("rahulnerella119@gmail.com")

 

})