# ray-vs-circle

Ray-aware circle intersection check.

## Usage

    var rayVsCircle = require('ray-vs-circle');
    
    var Vec2 = require('vec2');
    var Rayish = require('rayish');
    var Circle2 = require('circle2');
    
    var rayish = new Rayish(new Vec2(10, 50), new Vec2(50, 50));
    var circle = new Circle2(new Vec2(50, 50), 5);
    
    var point = rayVsCircle(rayish, circle);
    
    point // (45, 50)

## Install

    npm install ray-vs-circle

## License

MIT


