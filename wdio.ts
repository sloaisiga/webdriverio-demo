import { Config } from "webdriverio";

const config: Config = {
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
  reporters: ["spec"],
};

export { config };
