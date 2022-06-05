import { Texture } from "../entities/texture.entity"
import { ColorRGB } from "../value-objects/colorRGB.value,";
import { TextureId } from "../value-objects/texture-id.value"

export class TextureFactory{
    public static createFrom(
        colorRGB:ColorRGB,
        pixelsDensity:number,
        material:number
    ): Texture {
        return new Texture(
            TextureId.create(0),
            colorRGB,
            pixelsDensity,
            material
        );
    }

    public static createWithId(
        textureId:TextureId,
        colorRGB:ColorRGB,
        pixelsDensity:number,
        material:number
    ): Texture {
        return new Texture(
            textureId,
            colorRGB,
            pixelsDensity,
            material
        );
    }
}