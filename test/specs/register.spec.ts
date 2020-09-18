import register from "../pageobjects/register.page";

describe('My Form', () => {
    before(() => {
      register.open("/register")
    })

    it('should validate form elements', () => {
        expect(browser.getUrl()).toEqual('https://demoqa.com/register')
    })
});


