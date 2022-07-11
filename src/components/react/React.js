"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var ReactComponent = /** @class */ (function (_super) {
    __extends(ReactComponent, _super);
    function ReactComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactComponent.prototype.render = function () {
        return (React.createElement("p", null, " React"));
    };
    return ReactComponent;
}(react_1.Component));
exports.default = ReactComponent;
//# sourceMappingURL=React.js.map