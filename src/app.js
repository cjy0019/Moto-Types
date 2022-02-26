"use strict";
exports.__esModule = true;
var page_js_1 = require("./components/page.js");
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new page_js_1.PageComponent();
        this.page.attachTo(appRoot);
    }
    return App;
}());
new App(document.querySelector('.document'));
