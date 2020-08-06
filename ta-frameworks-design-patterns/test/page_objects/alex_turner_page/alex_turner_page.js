const BasePage = require("../base_page/base_page");
const logger = require('../../config/logger.config');

class AlexTurnerPage extends BasePage {
    constructor() {
      super();
      this.url = "https://en.wikipedia.org/wiki/Alex_Turner";
    };
};

module.exports = AlexTurnerPage;