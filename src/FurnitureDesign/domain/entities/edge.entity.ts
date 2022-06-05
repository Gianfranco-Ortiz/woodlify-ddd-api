import { EdgeId } from "../value-objects/edge-id.value";

export class Edge {
    constructor(
        private _id: EdgeId,
        private _x1: number,
        private _y1: number,
        private _z1: number,
        private _x2: number,
        private _y2: number,
        private _z2: number
    ){}
    getId(): EdgeId {
        return this._id;
    }
}