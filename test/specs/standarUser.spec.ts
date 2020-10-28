import actors from '../actors/actorData'
import Actor from '../actors/actor'
import interrogations from "../actions/interrogations"
import cart from "../pageobjects/cart.page"
import checkout from "../pageobjects/checkout.page"
import { Chance } from "chance";
import inventory from '../pageobjects/inventory.page'
const chance = new Chance();

describe('My Form', () => {
    let actor = new Actor(actors[0].username)
    let priceTotal: number;
    
    before(() => {
      browser.url('/')
    })

    it('standard user with customer role authenticates into SAUCEDEMO', () => {
      actor.login()
      expect(interrogations.checkUrlPath()).toContain('inventory')
    })

    it("standard user should add items to the cart", () => {
      const itemsCounter: number = actor.addAllItems()
      expect(itemsCounter).toEqual(6)
    });

    it("standard user should have access to verify the cart", () => {
      const areButtonsDisplayed: boolean[] = cart.cartButtons.map(e=>e.isDisplayed())
      const result: boolean = areButtonsDisplayed.every(e=> e===true)
      expect(result).toBeTruthy;

      cart.shoppingCardCounter.click();
      browser.pause(500);

      const cartItemLength: number = cart.cartItems.length;
      expect(cartItemLength).toEqual(6)
    });

    it("standard user should have access to verify the cart", () => {
      const areButtonsDisplayed: boolean[] = cart.cartButtons.map(e=>e.isDisplayed())
      const result: boolean = areButtonsDisplayed.every(e=> e===true)
      expect(result).toBeTruthy;

      cart.shoppingCardCounter.click();
      browser.pause(500);

      const cartItemLength: number = cart.cartItems.length;
      expect(cartItemLength).toEqual(6)
    });

    it("standard user should fill checkout form information", () => {
      cart.cartCheckoutButton.click()
      checkout.firstName.waitForDisplayed({timeout: 5000, timeoutMsg: `First name input is not displayed after 5000 milliseconds`})
      checkout.firstName.setValue(chance.first());
      checkout.lastName.setValue(chance.last());
      checkout.zipCode.setValue(chance.zip());
      checkout.checkoutContinueButton.click();
      browser.pause(200);
      expect(interrogations.checkUrlPath()).toContain("checkout-step-two")
    });

    it("standard user should preview checkout information provided", () => {
      const summary: string = checkout.summary.getText();
      const priceTotal: string = inventory.getItemPrices();
      const isPriceTotal: boolean = summary.includes(priceTotal);
      
      expect(isPriceTotal).toBeTruthy;
      checkout.checkoutSecondPartFooter.forEach((e) => {
        const isDisplayed: boolean = e.isDisplayed();
        expect(isDisplayed).toBeTruthy;
      });
  
      checkout.submitCartButton.click();
      expect(interrogations.checkUrlPath()).toContain("ckout-complete");
    });

    it("standar user should complete checkout", () => {
      const header: string = checkout.completeCheckoutHeader.getText();
      const completeText: string = checkout.completeCheckoutText.getText();
      const ponyExpressImg: boolean = checkout.completeCheckoutImage.isDisplayed();
  
      expect(header).toEqual("THANK YOU FOR YOUR ORDER");
      expect(completeText).toEqual(
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );
      expect(ponyExpressImg).toBeTruthy;
    });

    it("standard user should logout", () => {
      actor.logOut()
      expect(interrogations.checkUrlPath()).toContain('index')
    });
});


