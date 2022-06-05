export class CanvasId {
    private readonly _id: number;
    constructor(id: number) {
        this._id = id;
    }
    static create(id: number): CanvasId {
        return new CanvasId(id);
    }
    getCanvasId(): number {
        return this._id;
    } 
}