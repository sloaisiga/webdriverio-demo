import data from '../actors/actorData'
import Actor from '../actors/actor'
import interrogations from '../actions/interrogations'
import cart from '../pageobjects/cart.page'
import checkout from '../pageobjects/checkout.page'

describe('My Form', () => {
    let actor = new Actor(data[0].username)
    
    before(() => {
      browser.url('/')
    })

    it('standard user with customer role authenticates into SAUCEDEMO', () => {
      // Action
      actor.login()
      // Question
      expect(interrogations.checkUrlPath()).toContain('inventory')
    })

    it('standard user should add items to the cart', () => {
      // Action
      actor.addAllItems()
      // Question
      expect(interrogations.checkItemsQuantity()).toEqual(6)
    })

    it('standard user should have access to verify the cart', () => { 
      // Question
      expect(interrogations.checkButtonsVisibility(cart.cartButtons)).toBeTruthy

      // Action
      actor.goToCart()
      browser.pause(500)

      // Question
      expect(interrogations.checkQtyOfCartItem()).toEqual(6)
    })

     it('standard user should fill checkout form', () => {
      // Action
      actor.checkout()
      actor.fillCheckoutForm()
     
      // Question
      expect(interrogations.checkUrlPath()).toContain('checkout-step-two')
    });


    it('standard user should preview checkout information provided', () => {
      // Question
      expect(interrogations.checkPriceInSummary()).toBeTruthy()
      
       // Question
       expect(interrogations.checkButtonsVisibility(checkout.checkoutSecondPartFooter)).toBeTruthy
  
      // Action
      actor.submitCart()

      // Question
      expect(interrogations.checkUrlPath()).toContain('ckout-complete');
    });
})


