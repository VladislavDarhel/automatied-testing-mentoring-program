const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const PageFactory = require("../utils/page_objects/pageFactory");

describe ('Count of Members in Arctic Monkeys', function() {

    beforeEach(function(){
    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();

    });
    
    it('Should search and open Arctic Monkeys Page', async function() {
        await PageFactory.getPage("Main").open();
        await PageFactory.getPage("Arctic Monkeys").Header.searchInput.sendKeysInSearchInput("Arctic Monkeys");
        await PageFactory.getPage("Arctic Monkeys").Header.clickSearchButton();
        const arcticMonkeysPageTitle = await PageFactory.getPage("Arctic Monkeys").Title.pageTitle.getTitleText();
        expect(arcticMonkeysPageTitle).to.be.equal("Arctic Monkeys");
    });    

    it('Should check that Arctic Monkeys has 4 members', async function() {
        await PageFactory.getPage("Arctic Monkeys").open();
        const countOfMembers = await PageFactory.getPage("Arctic Monkeys").Infobox.members.getCount();
        expect(countOfMembers).to.be.equal(4);
    });

    it('Should open Alex Turner page from Members category', async function() {
        await PageFactory.getPage("Arctic Monkeys").open();
        await PageFactory.getPage("Alex Turner").Infobox.clickAlexTurner();
        const alexTurnerPageTitle = await PageFactory.getPage("Alex Turner").Title.pageTitle.getTitleText();
        expect(alexTurnerPageTitle).to.be.equal("Alex Turner");
    });
});