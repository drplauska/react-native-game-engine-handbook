"use strict";
exports.__esModule = true;
var react_1 = require("react");
var game_engine_1 = require("./game-engine");
var override_renderer_1 = require("./override-renderer");
var react_native_donkey_kong_1 = require("react-native-donkey-kong");
function default_1(mount) {
    return {
        heading: "Examples",
        items: [
            {
                heading: "Game Engine",
                onPress: function (_) { return mount(<game_engine_1["default"] />); }
            },
            {
                heading: "Override Renderer",
                onPress: function (_) { return mount(<override_renderer_1["default"] />); }
            },
            {
                heading: "DonkeyKong",
                onPress: function (_) { return mount(<react_native_donkey_kong_1["default"] />); }
            }
        ]
    };
}
exports["default"] = default_1;
