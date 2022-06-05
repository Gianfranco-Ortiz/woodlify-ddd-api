export class TextureId {
    private readonly _id: number;
    constructor(id: number) {
        this._id = id;
    }
    static create(id: number): TextureId {
        return new TextureId(id);
    }
    getCanvasId(): number {
        return this._id;
    } 
}