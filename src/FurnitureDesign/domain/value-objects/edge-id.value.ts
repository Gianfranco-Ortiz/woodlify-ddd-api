export class EdgeId {
    private readonly _id: number;
    constructor(id: number) {
        this._id = id;
    }
    static create(id: number): EdgeId {
        return new EdgeId(id);
    }
    getEdgeId(): number {
        return this._id;
    } 
}