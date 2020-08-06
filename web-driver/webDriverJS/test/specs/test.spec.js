const {Builder, By, until} = require("selenium-webdriver");
const expect = require('chai').expect;
var driver = new Builder().forBrowser("chrome").build();
driver.manage().window().maximize(); 

describe ('Count of Members in Arctic Monkeys', function() {

    it('Should search and open Arctic Monkeys Page from initial page', async function() {
        await driver.get("https://www.wikipedia.org/");
        const btnSelectEnglishVersion = driver.findElement(By.id("js-link-box-en"));
        await btnSelectEnglishVersion.click();
        driver.wait(until.elementLocated(By.xpath("//*[@placeholder='Search Wikipedia']")))
        .sendKeys("Arctic Monkeys");
        await driver.findElement(By.xpath("//*[@type='submit' and @name='go']")).click();
        const arcticMonkeysPageTitle = await driver.findElement(By.css(".firstHeading")).getText();
        expect(arcticMonkeysPageTitle).to.be.equal("Arctic Monkeys");
    });    

    it('Should check that Arctic Monkeys has 4 members', async function() {
        await driver.get("https://en.wikipedia.org/wiki/Arctic_Monkeys");
        const arrayOfMembers = await driver.findElements(By.css("div.plainlist li [href^='/']"));
        const countOfMembers = arrayOfMembers.length;
        expect(countOfMembers).to.be.equal(4);
    });

    it('Should open Alex Turner page from Members category', async function() {
        await driver.get("https://en.wikipedia.org/wiki/Arctic_Monkeys");
        const alexTurnerBtn = driver.findElement(By.css("div.plainlist li:nth-child(1) [href^='/']"));
        await alexTurnerBtn.click();
        const alexTurnerPageTitle = await driver.findElement(By.css(".firstHeading")).getText();
        expect(alexTurnerPageTitle).to.be.equal("Alex Turner");
        driver.quit();
    });

});