const Collection = require("../base_elements/base_collection");
const Element = require("../base_elements/base_element");

class Infobox {
    constructor() {
        this.members = new Collection("Members", "div.plainlist li [href^='/']");
        this.theFirstMember = new Element("The First Member", "div.plainlist li:nth-child(1) [href^='/']");
    };
    
    async clickOnMember(member) {
		if (member = 'First')
        return await this.theFirstMember.mouseMoveAndClick();
    };
};

module.exports = Infobox;