const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.rightNavigationButtons = new Collection("Right Navigation Buttons", "div#p-views>ul>li");
        this.searchInput = new Element("Search Input", "#searchInput");
    };
    
    async clickEnterKey(){
        return await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };
};

module.exports = Header;