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
var back_png_1 = require("./images/back.png");
var BackButton = /** @class */ (function (_super) {
    __extends(BackButton, _super);
    function BackButton(props) {
        var _this = _super.call(this, props) || this;
        _this.fadeInLeft = function (duration) {
            return _this.refs.back.fadeInLeft(duration);
        };
        _this.fadeOutLeft = function (duration) {
            return _this.refs.back.fadeOutLeft(duration);
        };
        _this.fadeInRight = function (duration) {
            return _this.refs.back.fadeInRight(duration);
        };
        _this.fadeOutRight = function (duration) {
            return _this.refs.back.fadeOutRight(duration);
        };
        _this.onPressIn = function () {
            _this.refs.back.transitionTo({
                marginLeft: -40,
                marginRight: 40
            });
        };
        _this.onPressOut = function () {
            _this.refs.back.transitionTo({
                marginLeft: -20,
                marginRight: 20
            });
        };
        _this.state = {};
        return _this;
    }
    BackButton.prototype.render = function () {
        return (<react_native_1.TouchableOpacity key={"back"} activeOpacity={1} hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }} onPress={this.props.onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
        <Animatable.Image ref={"back"} animation={this.props.animation} style={css.container} source={back_png_1["default"]}/>
      </react_native_1.TouchableOpacity>);
    };
    return BackButton;
}(react_1.Component));
exports["default"] = BackButton;
var css = react_native_extended_stylesheet_1["default"].create({
    container: {
        marginLeft: -20,
        marginRight: 20
    }
});
