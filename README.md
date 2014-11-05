# ray-vs-circle

Ray-aware circle intersection check.

## Usage

    var rayVsCircle = require('ray-vs-circle');
    
    var circle = {
      position: {x: 50, y: 50},
      radius: 5
    };
    
    var ray = {
      start: {x: 10, y: 50},
      end: {x: 50, y: 50}
    };
    
    var point = rayVsCircle(rayish, circle);
    
    point // {x: 45, y: 50}

## Install

    npm install ray-vs-circle

## License

MIT


