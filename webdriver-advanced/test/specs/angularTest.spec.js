const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const PageFactory = require("../utils/page_objects/pageFactory");
const waits = require("../utils/page_objects/waits");

describe ('Categories page opening', function() {

    beforeEach(function() {
		browser.ignoreSynchronization = true;
        return browser.manage().window().maximize();

    });
    
    it('Should open Categories page', async function() {
        await browser.get("https://mixer.com/");
        const categoriesButton = element(by.css('[href*="categories"]'));
        await categoriesButton.click();
        const categoriesTitle = await browser.getCurrentUrl();
        expect(categoriesTitle).to.be.equal("https://mixer.com/browse/categories");
    });    
});


