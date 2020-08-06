const Element = require("../base_elements/base_element");

class Title {
    constructor() {
        this.pageTitle = new Element("Page Title", ".firstHeading");
    };
};

module.exports = Title;