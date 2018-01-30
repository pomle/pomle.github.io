import {Vec} from './math.js';

function toPoint([x, y, z]) {
    return new Vec(x, y, z);
}

function toPolygon(shape) {
    return shape.map(toPoint);
}

function offset(point, position) {
    point.x += position.x;
    point.y += position.y;
    point.z += position.z;
}

function scale(point, scale) {
    point.x *= scale.x;
    point.y *= scale.y;
    point.z *= scale.z;
}

function rotate(point, rotation) {
    const sin = new Vec(
        Math.sin(rotation.x),
        Math.sin(rotation.y),
        Math.sin(rotation.z));

    const cos = new Vec(
        Math.cos(rotation.x),
        Math.cos(rotation.y),
        Math.cos(rotation.z));

    let temp1, temp2;

    temp1 = cos.x * point.y + sin.x * point.z;
    temp2 = -sin.x * point.y + cos.x * point.z;
    point.y = temp1;
    point.z = temp2;

    temp1 = cos.y * point.x + sin.y * point.z;
    temp2 = -sin.y * point.x + cos.y * point.z;
    point.x = temp1;
    point.z = temp2;

    temp1 = cos.z * point.x + sin.z * point.y;
    temp2 = -sin.z * point.x + cos.z * point.y;
    point.x = temp1;
    point.y = temp2;
}

export function createMesh(model) {
    return new Mesh(model.map(toPolygon));
}

export class Mesh {
    constructor(polygons) {
        this.polygons = polygons;
        this.position = new Vec();
        this.rotation = new Vec();
        this.scale = new Vec(1, 1, 1);
    }

    transform() {
        return this.polygons.map(polygon => {
            return polygon
                .map(point => point.clone())
                .map(point => {
                    scale(point, this.scale);
                    rotate(point, this.rotation);
                    offset(point, this.position);
                    return point;
                });
        });
    }
}
