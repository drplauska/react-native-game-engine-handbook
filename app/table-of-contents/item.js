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
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        var _this = _super.call(this, props) || this;
        _this.fadeInLeft = function (duration) {
            return _this.refs.item.fadeInLeft(duration);
        };
        _this.fadeOutLeft = function (duration) {
            return _this.refs.item.fadeOutLeft(duration);
        };
        _this.fadeInRight = function (duration) {
            return _this.refs.item.fadeInRight(duration);
        };
        _this.fadeOutRight = function (duration) {
            return _this.refs.item.fadeOutRight(duration);
        };
        _this.state = {};
        return _this;
    }
    Item.prototype.render = function () {
        return (<react_native_1.TouchableOpacity onPress={this.props.onPress}>
        <Animatable.Text delay={this.props.delay} animation={this.props.animation} style={css.itemText} ref={"item"}>
          {this.props.value}
        </Animatable.Text>
      </react_native_1.TouchableOpacity>);
    };
    return Item;
}(react_1.Component));
exports["default"] = Item;
var css = react_native_extended_stylesheet_1["default"].create({
    $fontHeight: "3%",
    $lineHeight: "7.5%",
    itemText: {
        backgroundColor: "transparent",
        fontSize: "$fontHeight",
        lineHeight: "$lineHeight",
        color: "#FFF"
    }
});
