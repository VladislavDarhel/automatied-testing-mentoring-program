const yargs = require('yargs').argv;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  restartBrowserBetweenTests: yargs.restartBrowserBetweenTests,
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
    'goog:chromeOptions': {
    'w3c': false
  }
  },
  getPageTimeout: 60000,  
  allScriptsTimeout: 500000, 
  chromeDriver: './webdriver/chromedriver.exe',
  geckoDriver: './webdriver/geckodriver.exe',
  framework: 'mocha',
  specs: [
    '../specs/*.js'
  ],
  mochaOpts: {
    ui: 'bdd',
    reporter: 'dot',
    timeout: 70000,
    bail: true
},
};
