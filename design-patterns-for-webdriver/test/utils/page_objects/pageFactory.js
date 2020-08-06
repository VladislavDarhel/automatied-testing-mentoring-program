const MainPage = require("./main_page/main_page");
const ArcticMonkeysPage = require("./arctic_monkeys_page/arctic_monkeys_page");
const AlexTurnerPage = require("./alex_turner_page/alex_turner_page");
const BasePage = require("./base_page/base_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Main":
                return new MainPage();
            case "Arctic Monkeys":
                return new ArcticMonkeysPage();
            case "Alex Turner":
                return new AlexTurnerPage();
                default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;