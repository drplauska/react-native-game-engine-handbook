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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_game_engine_1 = require("react-native-game-engine");
var renderers_1 = require("./renderers");
var systems_1 = require("./systems");
var heading_1 = require("./heading");
var backButton_1 = require("./backButton");
var item_1 = require("./item");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var logo_png_1 = require("./images/logo.png");
var TableOfContents = /** @class */ (function (_super) {
    __extends(TableOfContents, _super);
    function TableOfContents(props) {
        var _this = _super.call(this, props) || this;
        _this.onItemPress = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var refs, tasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data.items) return [3 /*break*/, 2];
                        refs = [this.state.heading, "back"].concat(this.state.items.map(function (x) { return x.heading; }));
                        tasks = refs
                            .map(function (r) { return _this.refs[r]; })
                            .filter(function (r) { return r; })
                            .map(function (r) { return r.fadeOutLeft(400); });
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        this.setState({
                            heading: data.heading,
                            items: data.items,
                            parent: Object.assign({}, this.state),
                            animation: "fadeInRight"
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        if (data.onPress) {
                            data.onPress();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.onBackPress = function (ev) { return __awaiter(_this, void 0, void 0, function () {
            var parent_1, backButton, refs, tasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state.parent) return [3 /*break*/, 2];
                        this.refs.engine.publishEvent({
                            type: "back-pressed",
                            x: ev.nativeEvent.pageX,
                            y: ev.nativeEvent.pageY
                        });
                        parent_1 = this.state.parent;
                        backButton = this.refs["back"];
                        refs = [this.state.heading].concat(this.state.items.map(function (x) { return x.heading; }));
                        tasks = refs
                            .map(function (r) { return _this.refs[r]; })
                            .filter(function (r) { return r; })
                            .map(function (r) { return r.fadeOutRight(400); })
                            .concat([backButton.fadeOutLeft(400)]);
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        _a.sent();
                        this.setState({
                            heading: parent_1.heading,
                            items: parent_1.items,
                            parent: null,
                            animation: "fadeInLeft"
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            heading: props.contents.heading,
            items: props.contents.items,
            animation: "fadeInRight"
        };
        return _this;
    }
    TableOfContents.prototype.render = function () {
        var _this = this;
        var backButton = this.state.parent
            ? <backButton_1["default"] key={"back"} ref={"back"} onPress={this.onBackPress} animation={"fadeInLeft"}/>
            : null;
        return (<expo_linear_gradient_1.LinearGradient colors={["#E96443", "#904E95"]} style={css.linearGradient}>

        <react_native_game_engine_1.GameEngine ref={"engine"} running={!this.props.sceneVisible} systems={[
                systems_1.SpawnParticles,
                systems_1.Gravity,
                systems_1.Wind,
                systems_1.Sprinkles,
                systems_1.Motion,
                systems_1.DegenerateParticles
            ]} entities={{
                "particle-system-01": {
                    particles: [],
                    renderer: renderers_1.ParticleSystem
                }
            }}>
          <react_native_1.StatusBar hidden={false} barStyle={"light-content"}/>

          <react_native_1.ScrollView contentContainerStyle={css.container}>

            <react_native_1.Image style={css.logo} source={logo_png_1["default"]}/>
            <react_native_1.View style={[
                css.headingContainer,
                { marginLeft: backButton ? -50 : 0 }
            ]}>

              {backButton}

              <heading_1["default"] animation={this.state.animation} key={this.state.heading} ref={this.state.heading} value={this.state.heading}/>

            </react_native_1.View>

            {this.state.items.map(function (x, i) {
                return (<item_1["default"] key={x.heading} ref={x.heading} value={x.heading} animation={_this.state.animation} delay={++i * 75} onPress={function (_) { return _this.onItemPress(x); }}/>);
            })}

          </react_native_1.ScrollView>

        </react_native_game_engine_1.GameEngine>

      </expo_linear_gradient_1.LinearGradient>);
    };
    return TableOfContents;
}(react_1.Component));
exports["default"] = TableOfContents;
var css = react_native_1.StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    logo: {
        marginTop: "20%",
        marginBottom: "10%"
    },
    container: {
        alignSelf: "center",
        alignItems: "center",
        width: "100%"
    },
    headingContainer: {
        alignItems: "center",
        marginTop: "4.5%",
        marginBottom: "2.25%",
        alignSelf: "center",
        flexDirection: "row"
    }
});
