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
exports.ParticleSystem = exports.Particle = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
//import Svg, { Path, Rect } from "react-native-svg";
//const { Surface, Group, Shape } = ART;
var _a = react_native_1.Dimensions.get("window"), WIDTH = _a.width, HEIGHT = _a.height;
var Particle = /** @class */ (function (_super) {
    __extends(Particle, _super);
    function Particle(props) {
        return _super.call(this, props) || this;
    }
    Particle.prototype.render = function () {
        var size = HEIGHT * 0.002 * this.props.size;
        var x = this.props.position[0] - size / 2;
        var y = this.props.position[1] - size / 2;
        return (<react_native_1.View style={{
                borderRadius: size,
                position: "absolute",
                left: x,
                top: y,
                width: size,
                height: size,
                backgroundColor: this.props.color
            }}/>);
    };
    return Particle;
}(react_1.PureComponent));
exports.Particle = Particle;
//-- Performs best on physical device (iPad Mini 2)
var ParticleSystem = /** @class */ (function (_super) {
    __extends(ParticleSystem, _super);
    function ParticleSystem(props) {
        return _super.call(this, props) || this;
    }
    ParticleSystem.prototype.render = function () {
        return (<react_native_1.View>
        {this.props.particles.map(function (p, i) { return (<Particle key={i} position={p.position} color={p.color} size={p.size}/>); })}
      </react_native_1.View>);
    };
    return ParticleSystem;
}(react_1.Component));
exports.ParticleSystem = ParticleSystem;
