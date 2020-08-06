class Collection {
    constructor(elementName, selector) {
        this.collection = element.all(by.css(selector));
        this.elementName = elementName;
    };
    async getCount() {
        const collectionCount = await this.collection.count();
        return collectionCount;
    };
    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        return arrayOfCollectionTexts;
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        return this.collection.get(elementToClickIndex).click();
    };
};

module.exports = Collection;