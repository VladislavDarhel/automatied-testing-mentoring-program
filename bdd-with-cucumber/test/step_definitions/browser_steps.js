const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);

When('I open {string} url', async function(url) {
  return await browser.get(url);
});

Then(/^Page title should (not )?be "([^"]*)"$/, async function(notArg, title) {
  const pageTitle = await browser.getTitle();
  if (notArg) {
    expect(pageTitle).to.not.be.equal(title);
  } else {
    expect(pageTitle).to.be.equal(title);
  }
});

When(/^I search for "([^"]*)"$/, async function(searchInput) {
    const inputSearch = element(by.xpath('//*[@placeholder="Search Wikipedia"]'));
    await inputSearch.sendKeys(searchInput);
    const btnSearch = element(by.xpath("//*[@type='submit' and @name='go']"));
    await btnSearch.click();
});

When('I wait "{int}" seconds', async function(timeInSeconds) {
    return await browser.sleep(timeInSeconds*1000);
});

When('I click on {string} member', async function(textToClick) {
    const members = element.all(by.css("div.plainlist li [href^='/']"));
    const arrayOfElementTexts = await members.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        return await members.get(elementToClickIndex).click();
});