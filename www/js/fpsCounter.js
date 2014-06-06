var fpsCanvas;

if (window.ejecta) {
    fpsCanvas = document.createElement('fpsCanvas');
} else {
    fpsCanvas = document.getElementById('fpsCounter');
    fpsCanvas.width = 200;
    fpsCanvas.height = 50;
}
var context = fpsCanvas.getContext('2d');

var fps = 0;
var avgFPS = 60;
var previousRender = Date.now();

function drawFPS() {
    fps = 1000 / (Date.now() - previousRender);
    avgFPS = avgFPS * 0.95 + fps * 0.05;
    previousRender = Date.now();

    context.fillRect(0, 0, 200, 50);
        
    context.fillStyle = '#FFFFFF  ';
    context.font="30px Arial";
    context.fillText(avgFPS.toFixed(1), 5, 60);
    
}