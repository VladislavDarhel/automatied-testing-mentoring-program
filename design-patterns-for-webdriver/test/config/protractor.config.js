exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
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
