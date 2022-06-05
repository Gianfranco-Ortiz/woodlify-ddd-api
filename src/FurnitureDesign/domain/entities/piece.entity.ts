import { Edge } from "./edge.entity";
import { Texture } from "./texture.entity";
import { PieceId } from "../value-objects/piece-id.value"



export class Piece {
    private _faces: Edge[];
    private _textures: Texture[];
    
    constructor(
        private _id: PieceId,
        private _length: Number,
        private _height: Number,
        private _width: Number,
        private _name: string
    ) {
        this._faces = [];
        this._textures = [];
    }
    addFace(face: Edge): void {
        this._faces.push(face);
    }
    getFaces(): Edge[] {
        return [...this._faces];
    }
    addTexture(texture: Texture): void {
        this._textures.push(texture);
    }
    getTextures(): Texture[] {
        return [...this._textures];
    }
}