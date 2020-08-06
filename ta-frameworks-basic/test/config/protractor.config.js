exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
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
