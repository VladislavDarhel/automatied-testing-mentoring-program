const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const PageFactory = require("../page_objects/pageFactory");
const waits = require("../page_objects/waits");

describe ('Alex Turner page opening', function() {

    beforeEach(function() {
    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();

    });
    
    it('Should open Alex Turner page from Members category', async function() {
        await PageFactory.getPage("Arctic Monkeys").open();
        await PageFactory.getPage("Alex Turner").Infobox.members.clickElementByText("Alex Turner");
        const alexTurnerPageTitle = await PageFactory.getPage("Alex Turner").Title.pageTitle.getElementText();
        expect(alexTurnerPageTitle).to.be.equal("Alex Turner");
    });
});


