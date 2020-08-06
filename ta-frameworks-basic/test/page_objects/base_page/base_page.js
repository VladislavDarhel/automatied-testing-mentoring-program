const logger = require('../../../config/logger.config');
const Header = require('./header');
const Title = require('./title');
const Infobox = require('./infobox');
const Footer = require('./footer');
const NavigationalPanel = require('./navigational_panel');


class BasePage {
    constructor() {
        this.Header = new Header();
        this.Title = new Title();
        this.Infobox = new Infobox();
        this.Footer = new Footer();
        this.NavigationalPanel = new NavigationalPanel();
    };
    async wait() {
        logger.info(`Waiting for visible timeout`);
        return await browser.sleep();
    };
    async getCurrenUrl() {
        const currentUrl = await browser.getCurrentUrl();
        logger.debug(`Current url is "${currentUrl}"`)
        return currentUrl;
    };
    async open() {
        logger.info(`Opening "${this.url}" url`);
        return await browser.get(this.url);
    };
    async scrollToTheEndOfPage() {
        logger.info(`Scrolling to the end of page`);
        return await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)')
    };
    async scrollToTop() {
        logger.info(`Scrolling to the top of page`);
        return await browser.executeScript('window.scrollTo(0, 0)')
    };
    async getPageTitle() {
        const pageTitleText = await browser.executeScript("return document.title;");
        logger.info(`Title text is ${pageTitleText}`);
        return pageTitleText;
    };
};

module.exports = BasePage;