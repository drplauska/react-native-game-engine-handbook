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
var Animatable = require("react-native-animatable");
var react_native_extended_stylesheet_1 = require("react-native-extended-stylesheet");
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(props) {
        var _this = _super.call(this, props) || this;
        _this.fadeInLeft = function (duration) {
            return _this.refs.heading.fadeInLeft(duration);
        };
        _this.fadeOutLeft = function (duration) {
            return _this.refs.heading.fadeOutLeft(duration);
        };
        _this.fadeInRight = function (duration) {
            return _this.refs.heading.fadeInRight(duration);
        };
        _this.fadeOutRight = function (duration) {
            return _this.refs.heading.fadeOutRight(duration);
        };
        _this.state = {};
        return _this;
    }
    Heading.prototype.render = function () {
        return (<Animatable.View ref={"heading"} animation={this.props.animation} style={css.container}>
        <react_native_1.Text style={css.text}>
          {this.props.value
                .substring(this.props.value.indexOf(".") + 1, this.props.value.length)
                .trim()
                .toUpperCase()}
        </react_native_1.Text>
      </Animatable.View>);
    };
    return Heading;
}(react_1.Component));
exports["default"] = Heading;
var css = react_native_extended_stylesheet_1["default"].create({
    $borderHeight: "0.5%",
    $fontHeight: "3%",
    $lineHeight: "5%",
    $letterSpacingWidth: "1.3%",
    container: {
        borderBottomWidth: "$borderHeight",
        borderColor: "#FFF"
    },
    text: {
        backgroundColor: "transparent",
        letterSpacing: "$letterSpacingWidth",
        color: "#FFF",
        fontSize: "$fontHeight",
        lineHeight: "$lineHeight",
        fontWeight: "bold"
    }
});
