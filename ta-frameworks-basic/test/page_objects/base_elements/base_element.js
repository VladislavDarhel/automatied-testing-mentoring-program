const logger = require('../../../config/logger.config');

class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    async click() {
        logger.info(`Clicking "${this.elementName}"`);
        return await this.element.click();
    };
    async getElementText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };
    async sendKeysInElement(inputKeys) {
        logger.info(`Sending Keys "${inputKeys}" into "${this.elementName}"`);
        return await this.element.sendKeys(inputKeys);
    };
    async mouseMoveAndClick() {
        logger.info(`Mouse Move on and Clicking "${this.elementName}"`);
        return await browser.actions().mouseMove(this.element).click().perform();
    }
    
};

module.exports = Element;