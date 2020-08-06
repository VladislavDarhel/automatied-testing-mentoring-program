const Header = require('./header');
const Title = require('./title');
const Infobox = require('./infobox');

class BasePage {
    constructor() {
        this.Header = new Header();
        this.Title = new Title();
        this.Infobox = new Infobox();
    };
    async wait(waitInMilliseconds) {
        return await browser.sleep(waitInMilliseconds);
    };
    async getCurrenUrl() {
        return await browser.getCurrentUrl();
    };
    async open() {
        return await browser.get(this.url);
    };
    async scrollToTheEndOfPage() {
        return await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)')
    };
    async scrollToTop() {
        return await browser.executeScript('window.scrollTo(0, 0)')
    };
    async getPageTitle() {
        return await browser.executeScript("return document.title;")
    };
};

module.exports = BasePage;