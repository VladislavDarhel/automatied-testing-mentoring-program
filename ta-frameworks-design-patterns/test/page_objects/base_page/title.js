const Element = require("../base_elements/base_element");
const logger = require('../../config/logger.config');

class Title {
    constructor() {
        this.pageTitle = new Element("Page Title", ".firstHeading");
    };
};

module.exports = Title;