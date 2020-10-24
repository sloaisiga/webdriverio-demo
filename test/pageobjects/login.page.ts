import Page from "./page";

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
}

export default new LoginPage();
