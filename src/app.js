import Zdog from 'zdog';

// TAU
const TAU = Zdog.TAU;

// Body sizing
let hipX    = 3;
let armSize = 6;

// Rotating flag variable
let isSpinning = true;

// Colours
const gold     = '#EA0';
const eggplant = '#636';
const orange   = '#E62';
const cream    = '#FED';
const cherry   = '#C25';

// Create illo
let illo1 = new Zdog.Illustration({
    element: '.zdog-canvas1',
    zoom: 4,
    dragRotate: true,
    onDragStart() {
        isSpinning = false;
    },
});

// Create a circle
new Zdog.Ellipse({
    addTo: illo1,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: eggplant,
});

// Create a square
new Zdog.Rect({
    addTo: illo1,
    width: 20,
    height: 20,
    translate: { z: -10 },
    stroke: 3,
    color: orange,
    fill: true,
});

// Render new illo (Man)
let illo2 = new Zdog.Illustration({
    element: '.zdog-canvas2',
    zoom: 5,
    rotate: { y: -TAU/8 },
    dragRotate: true,
});

// Hips
let hips = new Zdog.Shape({
    addTo: illo2,
    path: [{ x: -hipX }, { x: hipX}],
    translate: { y: 2 },
    stroke: 4,
    color: eggplant,
});

// Anchor for rotating just the upper body
let spine = new Zdog.Anchor({
    addTo: hips,
    rotate: { x: TAU/8 },
});

// Leg
let leg = new Zdog.Shape({
    addTo: hips,
    path: [{ y: 0 }, { y: 12 }],
    translate: { x: -hipX },
    rotate: { x: TAU/4 },
    color: eggplant,
    stroke: 4,
});

// Foot
let foot = new Zdog.RoundedRect({
    addTo: leg,
    width: 2,
    height: 4,
    cornerRadius: 1,
    translate: { y: 14, z: 2 },
    rotate: { x: TAU/4 },
    color: cherry,
    fill: true,
    stroke: 4,
});

// Left Leg
let standLeg = leg.copy({
    translate: { x: hipX },
    rotate: { x: -TAU/8 },
});

// Left leg foot
foot.copy({
    addTo: standLeg,
    rotate: { x: -TAU/8 },
});


// Chest
let chest = new Zdog.Shape({
    addTo: spine,
    path: [{ x: -1.5 }, { x: 1.5 }],
    translate: { y: -6.5 },
    stroke: 9,
    color: cherry,
});

// Head
let head = new Zdog.Shape({
    addTo: chest,
    stroke: 12,
    translate: { y: -9.5 },
    color: gold,
});

// Left Eye
let eye = new Zdog.Ellipse({
    addTo: head,
    diameter: 2,
    quarters: 2, // semi circle
    translate: { x: -2, y: 1, z: 4.5 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
});

// Right Eye
eye.copy({
    translate: { x: 2, y: 1, z: 4.5 },
});

// Mouth
new Zdog.Ellipse({
    addTo: head,
    diameter: 3,
    quarters: 2,
    translate: { y: 2.5, z: 4.5 },
    rotate: { z: TAU/4 },
    closed: true,
    color: cream,
    stroke: 0.5,
    fill: true,
    backface: false,
});

// Left arm
let upperArm = new Zdog.Shape({
    addTo: chest,
    path: [{ y: 0 }, { y: armSize }],
    translate: { x: -5, y: -2 },
    rotate: { x: -TAU/4 },
    color: eggplant,
    stroke: 4,
});

// Left forearm
let forearm = new Zdog.Shape({
    addTo: upperArm,
    path: [{ y: 0 }, { y: armSize }],
    translate: { y: armSize },
    rotate: { x: TAU/8 },
    color: gold,
    stroke: 4,
});

// Left Hand
new Zdog.Shape({
    addTo: forearm,
    translate: { y: armSize, z: 1 },
    stroke: 6,
    color: gold,
});

// Right arm
upperArm.copyGraph({
    translate: { x: 5, y: -2 },
    rotate: { x: TAU/4 },
});

function animate() {
    // Rotate illo1 each frame
    if (isSpinning) {
        illo1.rotate.y += 0.01;
    }

    illo1.updateRenderGraph();
    illo2.updateRenderGraph();

    // Animate next frame
    requestAnimationFrame(animate);
}

// Start animation
animate();
