import actors from '../actors/actorData'
import Actor from '../actors/actor'
import interrogations from "../actions/interrogations"
import cart from "../pageobjects/cart.page"
import checkout from "../pageobjects/checkout.page"
import { Chance } from "chance"
import inventory from '../pageobjects/inventory.page'
const chance = new Chance()

describe('My Form', () => {
    let actor = new Actor(actors[0].username)
    
    before(() => {
      browser.url('/')
    })

    it('standard user with customer role authenticates into SAUCEDEMO', () => {
      // Action
      actor.login()
      // Question
      expect(interrogations.checkUrlPath()).toContain('inventory')
    })

    it("standard user should add items to the cart", () => {
      // Actions
      actor.addAllItems()
      // Question
      expect(interrogations.checkItemsQuantity()).toEqual(6)
    })

    it("standard user should have access to verify the cart", () => {
      const areButtonsDisplayed: boolean[] = cart.cartButtons.map(e=>e.isDisplayed())
      const result: boolean = areButtonsDisplayed.every(e=> e===true)
      expect(result).toBeTruthy

      actor.verifyCartItems()
      browser.pause(500)

      expect(interrogations.checkExistenceOfCartItem()).toEqual(6)
    })
})


