"use strict";
exports.__esModule = true;
var react_1 = require("react");
var accelerometer_1 = require("./accelerometer");
function default_1(mount) {
    return {
        heading: "Sensors",
        items: [
            {
                heading: "Accelerometer",
                onPress: function (_) { return mount(<accelerometer_1["default"] />); }
            }
        ]
    };
}
exports["default"] = default_1;
