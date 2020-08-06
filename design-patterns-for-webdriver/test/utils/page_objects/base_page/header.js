const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class Header {
    constructor() {
        this.rightNavigationButtons = new Collection("Right Navigation Buttons", "div#p-views>ul>li");
        this.searchInput = new Element("Search Input", "#searchInput");
        this.searchButton = new Element("Search Button", "#searchButton");
    };
    
    async clickSearchButton(){
        return await this.searchButton.click();
    };
};

module.exports = Header;