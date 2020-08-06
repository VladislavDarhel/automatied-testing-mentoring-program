const logger = require('../../config/logger.config');

class Collection {
    constructor(elementName, selector) {
        this.collection = element.all(by.css(selector));
        this.elementName = elementName;
    };
    async getCount() {
        const collectionCount = await this.collection.count();
        logger.info(`Count of "${this.elementName}" is "${collectionCount}"`);
        return collectionCount;
    };
    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Texts of "${this.elementName}" are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            logger.error(`No element with [${textToClick}] text found!`);
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        return this.collection.get(elementToClickIndex).click();
    };
};

module.exports = Collection;