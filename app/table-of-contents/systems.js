"use strict";
exports.__esModule = true;
exports.DegenerateParticles = exports.Motion = exports.Sprinkles = exports.Wind = exports.Gravity = exports.SpawnParticles = void 0;
var COLORS = ["#FFF"];
var GRAVITY = [0, 0.05];
var random = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.random() * (max - min) + min;
};
var SpawnParticles = function (state, _a) {
    var screen = _a.screen;
    var flowRate = Math.random();
    if (flowRate > 0.2)
        return state;
    Object.keys(state).filter(function (key) { return state[key].particles; }).forEach(function (key) {
        var sys = state[key];
        sys.particles.push({
            position: [random(0, screen.width), -50],
            velocity: GRAVITY,
            mass: random(),
            lifespan: 148,
            size: random(0, 10),
            color: COLORS[Math.trunc(random(0, COLORS.length))]
        });
    });
    return state;
};
exports.SpawnParticles = SpawnParticles;
var Gravity = function (state) {
    Object.keys(state).filter(function (key) { return state[key].particles; }).forEach(function (key) {
        var sys = state[key];
        sys.particles.forEach(function (p) {
            var mass = p.mass;
            var acc = [GRAVITY[0] / mass, GRAVITY[1] / mass];
            var vel = p.velocity;
            p.velocity = [vel[0] + acc[0], vel[1] + acc[1]];
        });
    });
    return state;
};
exports.Gravity = Gravity;
var Wind = function (state) {
    return state;
};
exports.Wind = Wind;
var Sprinkles = function (state, _a) {
    var events = _a.events;
    var sysId = Object.keys(state).find(function (key) { return state[key].particles; });
    var sys = state[sysId];
    if (sys) {
        events.filter(function (e) { return e.type === "back-pressed"; }).forEach(function (e) {
            for (var i = 0; i < 8; i++) {
                sys.particles.push({
                    position: [e.x, e.y],
                    velocity: [random(-2, 2), random(-4, 1)],
                    mass: random(),
                    lifespan: 148,
                    size: random(0, 10),
                    color: COLORS[Math.trunc(random(0, COLORS.length))]
                });
            }
        });
    }
    return state;
};
exports.Sprinkles = Sprinkles;
var Motion = function (state) {
    Object.keys(state).filter(function (key) { return state[key].particles; }).forEach(function (key) {
        var sys = state[key];
        sys.particles.forEach(function (p) {
            var vel = p.velocity;
            var pos = p.position;
            p.position = [pos[0] + vel[0], pos[1] + vel[1]];
        });
    });
    return state;
};
exports.Motion = Motion;
var DegenerateParticles = function (state) {
    Object.keys(state).filter(function (key) { return state[key].particles; }).forEach(function (key) {
        var sys = state[key];
        sys.particles = sys.particles.filter(function (p) { return p.lifespan > 0; });
        sys.particles.forEach(function (p) { return p.lifespan--; });
    });
    return state;
};
exports.DegenerateParticles = DegenerateParticles;
