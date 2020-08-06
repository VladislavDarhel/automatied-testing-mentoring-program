const Collection = require("../base_elements/base_collection");
const Element = require("../base_elements/base_element");

class Infobox {
    constructor() {
        this.members = new Collection("Members", "div.plainlist li [href^='/']");
        this.alexTurner = new Element("Alex Turner Member", "div.plainlist li:nth-child(1) [href^='/']");
    };
    
    async clickAlexTurner(){
        return await this.alexTurner.click();
    };
};

module.exports = Infobox;