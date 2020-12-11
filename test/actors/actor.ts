import * as _ from 'lodash';
import Interactions from '../actions/interactions';
import actorData from './actorData';

export default class Actor {
    public username: string;
    public password: string;
    public role: string;

    constructor(username) {
        this.username = username;
        let actor = this.getActorData(username);
        this.password = actor.password;
        this.role = actor.role;
    }

    getActorData(username) {
        return _.find(actorData, {username});
    }

    login() {
        Interactions.logIntoAccount(this.username, this.password);
    }

    logOut() {
        Interactions.logOut()
    }

    addAllItems() {
        return Interactions.addAllItems()
    }

    verifyCartItems() {
        return Interactions.goToCart()
    }
}
