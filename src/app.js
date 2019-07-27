import RingSquare from './models/ringSquare';
import HappyMan from './models/happyMan';

const ringSquare = new RingSquare('.zdog-canvas1');
const happyMan = new HappyMan('.zdog-canvas2');

function animate() {
    // Rotate ringSquare each frame
    if (ringSquare.isSpinning) ringSquare.illo.rotate.y += 0.01;

    ringSquare.illo.updateRenderGraph();
    happyMan.illo.updateRenderGraph();

    // Animate next frame
    requestAnimationFrame(animate);
}

// Start animation
animate();
