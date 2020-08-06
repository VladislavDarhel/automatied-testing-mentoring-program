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
    async open(url) {
        return await browser.get(url);
    };
};

module.exports = BasePage;