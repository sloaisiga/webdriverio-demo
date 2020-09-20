import Page from "./page";
import * as _ from "lodash";

class LoginPage extends Page {
  get userNameInput(): WebdriverIO.Element {
    return $("#user-name");
  }
  get passwordInput(): WebdriverIO.Element {
    return $("#password");
  }
  get userName(): WebdriverIO.ElementArray {
    return $$("#login_credentials");
  }
  get password(): WebdriverIO.ElementArray {
    return $$(".login_password");
  }
  get loginButton(): WebdriverIO.Element {
    return $("#login-button");
  }
  get errorMessage(): WebdriverIO.Element {
    return $('h3[data-test="error"]');
  }

  submit() {
    this.loginButton.click();
  }

  getCredentials(regex: any) {
    let userNameList: string[];
    let passwordList: string[];
    userNameList = this.userName.map((e) => e.getText());
    passwordList = this.password.map((e) => e.getText());
    userNameList = _.tail(userNameList[0].split(regex));
    let password: string = _.tail(passwordList[0].split(regex))[0];
    return { userNameList, password };
  }

  logon() {
    let regex: any = /\r?\n|\r/g;
    let { userNameList, password }: { userNameList: string[]; password: string; } = this.getCredentials(regex);
  
    const standardUser: string = userNameList[0];
    this.userNameInput.setValue(standardUser);
    this.passwordInput.setValue(password);
  
    this.submit();
    browser.pause(300);
  }
  
}

export default new LoginPage();
