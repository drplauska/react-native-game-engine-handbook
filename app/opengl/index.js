"use strict";
exports.__esModule = true;
var react_1 = require("react");
var motion_blur_1 = require("./motion-blur");
var stanford_bunny_1 = require("./stanford-bunny");
var game_of_life_1 = require("./game-of-life");
var override_renderer_1 = require("../examples/override-renderer");
var lighting_1 = require("./lighting");
function default_1(mount) {
    return {
        heading: "OpenGL",
        items: [
            {
                heading: "Motion Blur",
                onPress: function (_) { return mount(<motion_blur_1["default"] />); }
            },
            {
                heading: "Stanford Bunny",
                onPress: function (_) { return mount(<stanford_bunny_1["default"] />); }
            },
            {
                heading: "Lighting",
                onPress: function (_) { return mount(<lighting_1["default"] />); }
            },
            {
                heading: "Game of Life",
                onPress: function (_) { return mount(<game_of_life_1["default"] />); }
            },
            {
                heading: "OpenGL Renderer",
                onPress: function (_) { return mount(<override_renderer_1["default"] />); }
            }
        ]
    };
}
exports["default"] = default_1;
