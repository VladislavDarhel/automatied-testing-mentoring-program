class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    async click() {
        return await this.element.click();
    };
    async getTitleText(){
        return await this.element.getText();
    };
    async sendKeysInSearchInput(inputKeys){
        return await this.element.sendKeys(inputKeys);
    };
    
};

module.exports = Element;