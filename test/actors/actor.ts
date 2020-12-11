import * as _ from 'lodash'
import Interactions from '../actions/interactions'
import actorData from './actorData'

export default class Actor {
    public username: string
    public password: string
    public role: string

    constructor(username) {
        this.username = username
        let actor = this.getActorData(username)
        this.password = actor.password
        this.role = actor.role
    }

    getActorData(username) {
        return _.find(actorData, {username})
    }

    login() {
        Interactions.logIntoAccount(this.username, this.password)
    }

    logOut() {
        return Interactions.logOut()
    }

    addAllItems() {
        return Interactions.addAllItems()
    }

    goToCart() {
        return Interactions.goToCart()
    }

    checkout(): void {
        return Interactions.checkout()
    }

    fillCheckoutForm():void {
        return Interactions.fillCheckoutForm()
    }

    submitCart(): void {
        return Interactions.submitCart()
    }
}
