import { Piece } from "../entities/piece.entity"
import { PieceId } from "../value-objects/piece-id.value"

export class PieceFactory{
    public static createFrom(
        length:number,
        height:number,
        width:Number,
        name:string,
    ): Piece {
        return new Piece(
            PieceId.create(0),
            length,
            height,
            width,
            name
        );
    }

    public static createWithId(
        PieceId:PieceId,
        length:number,
        height:number,
        width:Number,
        name:string,
    ): Piece{
        return new Piece(
            PieceId,
            length,
            height,
            width,
            name
        )
    }
}