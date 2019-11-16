'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var UP = exports.UP = new Promise(function (resolve, reject) {
    console.log('up');
    resolve('up');
});

var DOWN = exports.DOWN = new Promise(function (resolve, reject) {
    console.log('down');
    resolve('down');
});

var L = exports.L = new Promise(function (resolve, reject) {
    console.log('left');
    resolve('left');
});

var R = exports.R = new Promise(function (resolve, reject) {
    console.log('right');
    resolve('right');
});

var START = exports.START = new Promise(function (resolve, reject) {
    console.log('start');
    resolve('start');
});

var SELECT = exports.SELECT = new Promise(function (resolve, reject) {
    console.log('select');
    resolve('start');
});

var A = exports.A = new Promise(function (resolve, reject) {
    console.log('a');
    resolve('a');
});

var B = exports.B = new Promise(function (resolve, reject) {
    console.log('b');
    resolve('b');
});