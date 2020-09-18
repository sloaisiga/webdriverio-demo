import { Config } from 'webdriverio';

console.log("lol XD");

const config: Config = {
    runner: 'local',
    specs: [
        './build/specs/**/*.spec.js'
    ],
    exclude: [
    // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://demoqa.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 60000
    // },
}

export { config }