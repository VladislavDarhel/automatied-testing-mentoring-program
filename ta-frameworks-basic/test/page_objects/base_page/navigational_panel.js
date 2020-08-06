const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");
const logger = require('../../../config/logger.config');

class NavigationalPanel {
    constructor() {
        this.logoBanner = new Element("Wiki Logo Banner", ".mw-wiki-logo");
        this.mainLinks = new Collection("Main Links", ".portal-first>div>ul>li");
        this.interactionLinks = new Collection("Interactional Links", "[aria-labelledby='p-interaction-label']>div>ul>li");
        this.toolsLinks = new Collection("Tools Links", "[aria-labelledby='p-tb-label']>div>ul>li");
        this.otherProjectsLinks = new Collection("Other Projects Links", "[aria-labelledby='p-wikibase-otherprojects-label']>div>ul>li");
        this.printExportLinks = new Collection("Print Export Links", "[aria-labelledby='p-coll-print_export-label']>div>ul>li");
        this.languagesLinks = new Collection("Languages Links", "[aria-labelledby='p-lang-label'']>div>ul>li");
    };
};

module.exports = NavigationalPanel;