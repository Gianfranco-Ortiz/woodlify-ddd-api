import { CanvasId } from "../value-objects/canvas-id.value";

export class Canvas {
    constructor(
        private _id: CanvasId,
        private _name: string,
        private _createdAt: Date,
        private _lastModification: Date
    ) {

    }
    public getId(): CanvasId {
        return this._id;
    }

    public getName(): string{
        return this._name;
    }

    public getCreatedAt(): Date{
        return this._createdAt;
    }

    public getLastModification(): Date{
        return this._lastModification;
    }

    public changeId(id: CanvasId){
        this._id = id;
    }

}