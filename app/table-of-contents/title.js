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
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_extended_stylesheet_1 = require("react-native-extended-stylesheet");
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super.call(this) || this;
    }
    Title.prototype.render = function () {
        return (<react_native_1.View style={css.container}>
        <react_native_1.Text style={css.titleText}>
          THE <react_native_1.Text style={css.bold}>NATURE</react_native_1.Text> OF
        </react_native_1.Text>
        <react_native_1.Text style={[css.titleText, css.small]}>— CODE —</react_native_1.Text>
      </react_native_1.View>);
    };
    return Title;
}(react_1.Component));
exports["default"] = Title;
var css = react_native_extended_stylesheet_1["default"].create({
    $borderHeight: "0.5%",
    $fontHeight: "3.8%",
    $lineHeight: "6.7%",
    $letterSpacingWidth: "1.3%",
    $paddingHeight: "10.5%",
    container: {
        paddingTop: "$paddingHeight",
        alignItems: "center"
    },
    titleText: {
        fontSize: "$fontHeight",
        backgroundColor: "transparent",
        letterSpacing: "$letterSpacingWidth",
        color: "#FFF"
    },
    bold: {
        fontWeight: "900"
    },
    small: {
        fontSize: "$fontHeight * 0.6",
        lineHeight: "$lineHeight"
    }
});
