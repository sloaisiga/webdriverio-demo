import actors from '../actors/actorData'
import Actor from '../actors/actor'
import interrogations from "../actions/interrogations"


describe('My Form', () => {
    before(() => {
      browser.url('/')
    })

    it('standard_user user with customer role authenticates into SAUCEDEMO', () => {
      const actor = new Actor(actors[0].username)
      actor.login()
      expect(interrogations.checkInventoryUrl()).toContain('inventory');
    })
});


