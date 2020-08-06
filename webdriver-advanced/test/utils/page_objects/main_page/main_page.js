const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class MainPage extends BasePage {
    constructor() {
      super();
      this.url = "https://en.wikipedia.org/wiki/Main_Page";
      this.bodyContent = new Collection("Body Content", ".MainPageBG");
    };
};

module.exports = MainPage;