import Zdog from 'zdog';

// Rotating flag variable
let isSpinning = true;

// Create illo
let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 4,
    dragRotate: true,
    onDragStart: function() {
        isSpinning = false;
    },
});

// Create a circle
new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
});

// Create a square
new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    translate: { z: -10 },
    stroke: 3,
    color: '#E62',
    fill: true,
});

function animate() {
    // Rotate illo each frame
    if (isSpinning) {
        illo.rotate.y += 0.03;
    }

    illo.updateRenderGraph();

    // Animate next frame
    requestAnimationFrame(animate);
}

// Start animation
animate();
