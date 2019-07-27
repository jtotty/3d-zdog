import Zdog from 'zdog';

class HappyMan {
    constructor(element) {
        // Target canvas element id
        this.element = element;

        // TAU
        this.TAU = Zdog.TAU;

        // Body sizing
        this.bodySize = {
            hipX: 3,
            armSize: 6,
        }

        // Colours
        this.colors = {
            gold: '#EA0',
            eggplant: '#636',
            cream: '#FED',
            cherry: '#C25',
        }

        // Render new illo (Man)
        this.illo = new Zdog.Illustration({
            element: this.element,
            zoom: 5,
            rotate: { y: -this.TAU/8 },
            dragRotate: true,
        });

        // Hips
        this.hips = new Zdog.Shape({
            addTo: this.illo,
            path: [{ x: -this.bodySize.hipX }, { x: this.bodySize.hipX }],
            translate: { y: 2 },
            stroke: 4,
            color: this.colors.eggplant,
        });

        // Anchor for rotating just the upper body
        this.spine = new Zdog.Anchor({
            addTo: this.hips,
            rotate: { x: this.TAU/8 },
        });

        // Leg
        this.leg = new Zdog.Shape({
            addTo: this.hips,
            path: [{ y: 0 }, { y: 12 }],
            translate: { x: -this.bodySize.hipX },
            rotate: { x: this.TAU/4 },
            color: this.colors.eggplant,
            stroke: 4,
        });

        // Foot
        this.foot = new Zdog.RoundedRect({
            addTo: this.leg,
            width: 2,
            height: 4,
            cornerRadius: 1,
            translate: { y: 14, z: 2 },
            rotate: { x: this.TAU/4 },
            color: this.colors.cherry,
            fill: true,
            stroke: 4,
        });

        // Left Leg
        this.standLeg = this.leg.copy({
            translate: { x: this.bodySize.hipX },
            rotate: { x: -this.TAU/8 },
        });

        // Left leg foot
        this.foot.copy({
            addTo: this.standLeg,
            rotate: { x: -this.TAU/8 },
        });

        // Chest
        this.chest = new Zdog.Shape({
            addTo: this.spine,
            path: [{ x: -1.5 }, { x: 1.5 }],
            translate: { y: -6.5 },
            stroke: 9,
            color: this.colors.cherry,
        });

        // Head
        this.head = new Zdog.Shape({
            addTo: this.chest,
            stroke: 12,
            translate: { y: -9.5 },
            color: this.colors.gold,
        });

        // Left Eye
        this.eye = new Zdog.Ellipse({
            addTo: this.head,
            diameter: 2,
            quarters: 2, // semi circle
            translate: { x: -2, y: 1, z: 4.5 },
            rotate: { z: -this.TAU/4 },
            color: this.colors.eggplant,
            stroke: 0.5,
            backface: false,
        });

        // Right Eye
        this.eye.copy({
            translate: { x: 2, y: 1, z: 4.5 },
        });

        // Mouth
        this.mouth = new Zdog.Ellipse({
            addTo: this.head,
            diameter: 3,
            quarters: 2,
            translate: { y: 2.5, z: 4.5 },
            rotate: { z: this.TAU/4 },
            closed: true,
            color: this.colors.cream,
            stroke: 0.5,
            fill: true,
            backface: false,
        });

        // Left arm
        this.upperArm = new Zdog.Shape({
            addTo: this.chest,
            path: [{ y: 0 }, { y: this.bodySize.armSize }],
            translate: { x: -5, y: -2 },
            rotate: { x: -this.TAU/4 },
            color: this.colors.eggplant,
            stroke: 4,
        });

        // Left forearm
        this.forearm = new Zdog.Shape({
            addTo: this.upperArm,
            path: [{ y: 0 }, { y: this.bodySize.armSize }],
            translate: { y: this.bodySize.armSize },
            rotate: { x: this.TAU/8 },
            color: this.colors.gold,
            stroke: 4,
        });

        // Left Hand
        this.hand = new Zdog.Shape({
            addTo: this.forearm,
            translate: { y: this.bodySize.armSize, z: 1 },
            stroke: 6,
            color: this.colors.gold,
        });

        // Right arm
        this.upperArm.copyGraph({
            translate: { x: 5, y: -2 },
            rotate: { x: this.TAU/4 },
        });
    }
}

export default HappyMan;
