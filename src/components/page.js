"use strict";
exports.__esModule = true;
exports.PageComponent = void 0;
var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }
    PageComponent.prototype.attachTo = function (parent, position) {
        if (position === void 0) { position = 'afterbegin'; }
        parent.insertAdjacentElement(position, this.element);
    };
    return PageComponent;
}());
exports.PageComponent = PageComponent;
