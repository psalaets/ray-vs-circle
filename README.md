# ray-vs-circle

Ray-aware circle intersection check.

## Usage

    var rayVsCircle = require('ray-vs-circle');

    var ray = {
      start: {x: 10, y: 50},
      end: {x: 50, y: 50}
    };
    
    var circle = {
      position: {x: 50, y: 50},
      radius: 5
    };
    
    var point = rayVsCircle(ray, circle);
    
    point // {x: 45, y: 50}

## Install

    npm install ray-vs-circle

## License

MIT


