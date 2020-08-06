const Collection = require("../base_elements/base_collection");
const Element = require("../base_elements/base_element");
const logger = require('../../config/logger.config');

class Infobox {
    constructor() {
        this.members = new Collection("Members", "div.plainlist li [href^='/']");
    };
};

module.exports = Infobox;