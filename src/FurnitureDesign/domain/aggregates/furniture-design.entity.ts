import { CustomerId } from "../value-objects/customer-id.value";
import { FurnitureId } from "../value-objects/furniture-id.value";
import { PieceId } from "../value-objects/piece-id.value";
import { Piece } from "../entities/piece.entity";

export class Furniture {
    private _id: FurnitureId;
    private _name: string;
    private _pieces: Piece[];
    private _designedAt: Date;
    private _designedBy: CustomerId;

    constructor(id: FurnitureId, designedAt: Date, designedBy: CustomerId, name: string){
        this._id = id;
        this._pieces = [];
        this._designedAt = designedAt;
        this._designedBy = designedBy;
        this._name = name;
    }
    
    addShape(shape: Piece): void {
        this._pieces.push(shape);
    }

    getId(): FurnitureId {
        return this._id;
    }
    getShapes(): PieceId[] {
        return [...this._pieces];
    }
}