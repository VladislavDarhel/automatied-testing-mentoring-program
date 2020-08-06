const BasePage = require("../base_page/base_page");
const logger = require('../../config/logger.config');

class ArcticMonkeysPage extends BasePage {
    constructor() {
      super();
      this.url = "https://en.wikipedia.org/wiki/Arctic_Monkeys";
    };
};

module.exports = ArcticMonkeysPage;