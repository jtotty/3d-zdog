import Zdog from 'zdog';

/**
 * A ring and a square rotating next
 * to each other.
 */
class RingSquare {
    constructor(element) {
        // Target canvas element id
        this.element = element;

        // Flag animation spinning
        this.isSpinning = true;

        // Colors used for shapes
        this.colors = {
            eggplant: '#636',
            orange: '#E62',
        }

        // Top-level class to handle canvas and shapes
        this.illo = new Zdog.Illustration({
            element: this.element,
            zoom: 4,
            dragRotate: true,
            onDragStart() {
                this.isSpinning = false;
            },
        });

        // Circle shape
        this.circle = new Zdog.Ellipse({
            addTo: this.illo,
            diameter: 20,
            translate: { z: 10 },
            stroke: 5,
            color: this.colors.eggplant,
        });

        // Square shape
        this.square = new Zdog.Rect({
            addTo: this.illo,
            width: 20,
            height: 20,
            translate: { z: -10 },
            stroke: 3,
            color: this.colors.orange,
            fill: true,
        });
    }
};

export default RingSquare;
