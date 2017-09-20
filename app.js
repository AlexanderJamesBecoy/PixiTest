// Require pixi module
const pixi = require('pixi.js');


const type = "WebGL";
if(!pixi.utils.isWebGLSupported()) {
    type = "canvas";
}

pixi.utils.sayHello(type);
