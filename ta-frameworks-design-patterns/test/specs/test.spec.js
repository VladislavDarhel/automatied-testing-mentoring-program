const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const PageFactory = require("../page_objects/pageFactory");
const waits = require("../page_objects/waits");

describe ('Count of Members in Arctic Monkeys', function() {

    beforeEach(function() {
    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();

    });
    
    it('Should search and open Arctic Monkeys Page', async function() {
        await PageFactory.getPage("Main").open();
        await PageFactory.getPage("Arctic Monkeys").Header.searchInput.sendKeysInElement("Arctic Monkeys");
        await PageFactory.getPage("Arctic Monkeys").Header.clickEnterKey();
        const arcticMonkeysPageTitle = await PageFactory.getPage("Arctic Monkeys").getPageTitle();
        expect(arcticMonkeysPageTitle).to.be.equal("Arctic Monkeys - Wikipedia");
    });    

    it('Should check that Arctic Monkeys has 4 members', async function() {
        await PageFactory.getPage("Arctic Monkeys").open();
        await PageFactory.getPage("Arctic Monkeys").scrollToTheEndOfPage();
        await PageFactory.getPage("Arctic Monkeys").wait(waits.waitForVisibleTimeout);
        await PageFactory.getPage("Arctic Monkeys").scrollToTop();
        const countOfMembers = await PageFactory.getPage("Arctic Monkeys").Infobox.members.getCount();
        expect(countOfMembers).to.be.equal(4);
    });
});


