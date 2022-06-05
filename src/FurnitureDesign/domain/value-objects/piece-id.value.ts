export class PieceId {
    private readonly _id: number;
    constructor(id: number) {
        this._id = id;
    }
    static create(id: number): PieceId {
        return new PieceId(id);
    }
    getCanvasId(): number {
        return this._id;
    } 
}