class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    async click() {
        return await this.element.click();
    };
    async getElementText() {
        return await this.element.getText();
    };
    async sendKeysInElement(inputKeys) {
        return await this.element.sendKeys(inputKeys);
    };
    async mouseMoveAndClick() {
        return await browser.actions().mouseMove(this.element).click().perform();
    }
    
};

module.exports = Element;