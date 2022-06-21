"use strict";
exports.__esModule = true;
var react_1 = require("react");
var rigid_bodies_1 = require("./rigid-bodies");
function default_1(mount) {
    return {
        heading: "Physics",
        items: [
            {
                heading: "Rigid Bodies",
                onPress: function (_) { return mount(<rigid_bodies_1["default"] />); }
            }
        ]
    };
}
exports["default"] = default_1;
