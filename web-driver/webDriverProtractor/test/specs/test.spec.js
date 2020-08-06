const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;

describe ('Count of Members in Arctic Monkeys', function() {
    
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('Should search and open Arctic Monkeys Page', async function() {
        await browser.get("https://en.wikipedia.org/wiki/Main_Page");
        const inputSearch = element(by.xpath('//*[@placeholder="Search Wikipedia"]'));
        await inputSearch.sendKeys("Arctic Monkeys");
        const btnSearch = element(by.xpath("//*[@type='submit' and @name='go']"));
        await btnSearch.click();
        const arcticMonkeysPageTitle = await element(by.css(".firstHeading")).getText();
        expect(arcticMonkeysPageTitle).to.be.equal("Arctic Monkeys");
    });    

    it('Should check that Arctic Monkeys has 4 members', async function() {
        await browser.get("https://en.wikipedia.org/wiki/Arctic_Monkeys");
        var condition = EC.textToBePresentInElement($('.firstHeading'),'Arctic Monkeys');
        browser.wait(condition, 5000);
        const countOfMembers = await element.all(by.css("div.plainlist li [href^='/']")).count();
        expect(countOfMembers).to.be.equal(4);
    });

    it('Should open Alex Turner page from Members category', async function() {
        await browser.get("https://en.wikipedia.org/wiki/Arctic_Monkeys");
        await element(by.css("div.plainlist li:nth-child(1) [href^='/']")).click();
        const alexTurnerPageTitle = await element(by.css(".firstHeading")).getText();
        expect(alexTurnerPageTitle).to.be.equal("Alex Turner");
    });

});
