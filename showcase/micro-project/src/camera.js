import {Vec} from './math.js';

function perspective(point, distance) {
    const fov = point.z + distance;
    point.x /= fov;
    point.y /= fov;
}

function zoom(point, factor) {
    const scale = Math.pow(factor, 2);
    point.x *= scale;
    point.y *= scale;
}

export class Camera {
    constructor() {
        this.pos = new Vec(0, 0, 400);
        this.zoom = 16;
    }

    project(polygons) {
        polygons.forEach(polygon => {
            polygon.forEach(point => {
                perspective(point, this.pos.z);
                zoom(point, this.zoom);
            });
        });
    }
}
