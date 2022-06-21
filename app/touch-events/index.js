"use strict";
exports.__esModule = true;
var react_1 = require("react");
var single_touch_1 = require("./single-touch");
var multi_touch_1 = require("./multi-touch");
function default_1(mount) {
    return {
        heading: "Touch Events",
        items: [
            {
                heading: "Single Touch",
                onPress: function (_) { return mount(<single_touch_1["default"] />); }
            },
            {
                heading: "Multi Touch",
                onPress: function (_) { return mount(<multi_touch_1["default"] />); }
            }
        ]
    };
}
exports["default"] = default_1;
