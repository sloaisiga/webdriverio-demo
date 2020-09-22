import { Config } from "webdriverio";
interface CustomConfig extends Config {
  mochaOpts: {
    ui: string;
    timeout: number;
  }
}


const config: CustomConfig  = {
  runner: "local",
  specs: ["./build/specs/**/*.spec.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "https://www.saucedemo.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  mochaOpts: {
    ui: 'bdd',
    timeout: 9999999
  },
  reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
}]],
};

export { config };
