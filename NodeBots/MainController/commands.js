module.exports.UP = new Promise((resolve,reject) => {
    resolve('up');
});

module.exports.DOWN = new Promise((resolve,reject) => {
    resolve('down');
});

module.exports.L = new Promise((resolve,reject) => {
    resolve('left');
});

module.exports.R = new Promise((resolve,reject) => {
    resolve('right');
});

module.exports.START = new Promise((resolve,reject) => {
    resolve('start');
});

module.exports.SELECT = new Promise((resolve,reject) => {
    resolve('start');
});

module.exports.A = new Promise((resolve,reject) => {
    resolve('a');
});

module.exports.B = new Promise((resolve,reject) => {
    resolve('b');
}); 