import RingSquare from './models/ringSquare';
import HappyMan from './models/happyMan';

const RingSquare = new RingSquare('.zdog-canvas1');
const HappyMan = new HappyMan('.zdog-canvas2');

function animate() {
    // Rotate ringSquare each frame
    if (RingSquare.isSpinning) RingSquare.illo.rotate.y += 0.01;

    RingSquare.illo.updateRenderGraph();
    HappyMan.illo.updateRenderGraph();

    // Animate next frame
    requestAnimationFrame(animate);
}

// Start animation
animate();
