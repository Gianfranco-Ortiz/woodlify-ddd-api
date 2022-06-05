import { Binary } from "typeorm";
import { ColorRGB } from "../value-objects/colorRGB.value,";
import { TextureId } from "../value-objects/texture-id.value";

export class Texture {
    constructor(
        private _id: TextureId,
        private _colorRGB: ColorRGB,
        private _pixelsDensity: number,
        private _material: number
    ) {
        
    }
    getColor(): ColorRGB {
        return this._colorRGB;
    }
    changeColor(newColor: ColorRGB): void {
        this._colorRGB = {...newColor};
    }
    getTextureId(): TextureId {
        return this._id;
    }
}

