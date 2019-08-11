import Zdog from 'zdog';

class Familiar {
    constructor(element) {
        // Target canvas element id
        this.element = element;

        // TAU
        this.TAU = Zdog.TAU;

        // Colours
        this.colors = {
            black: '#101820',
            orange: '#F43C31',
            white: '#FBFBF9',
        }

        // Render
        this.illo = new Zdog.Illustration({
            element: this.element,
            rotate: { y: this.TAU/4 },
            dragRotate: true,
        });

        // Body
        this.body = new Zdog.Cone({
            addTo: this.illo,
            diameter: 70,
            length: 90,
            stroke: false,
            rotate: { x: -this.TAU/6 },
            color: this.colors.black,
        });

        // Head
        this.eye = new Zdog.Shape({
            addTo: this.body,
            stroke: 20,
            translate: { z: -35 },
            rotate: { x: -this.TAU/2.9 },
            color: this.colors.black,
        });

        // Beak
        this.beak = new Zdog.Cone({
            addTo: this.eye,
            diameter: 20,
            length: 30,
            stroke: false,
            translate: { z: 15 },
            color: this.colors.orange,
        });
    }
}

export default Familiar;
