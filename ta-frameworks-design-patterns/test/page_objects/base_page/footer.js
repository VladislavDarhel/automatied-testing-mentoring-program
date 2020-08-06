const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");
const logger = require('../../config/logger.config');

class Footer {
    constructor() {
        this.footerInfo = new Element("Footer Info", "#footer-info");
        this.footerPlaces = new Collection("Footer Places Buttons", "#footer-places>li");
        this.footerIcons = new Collection("Footer Icons", "#footer-icons>li");
    };
};

module.exports = Footer;