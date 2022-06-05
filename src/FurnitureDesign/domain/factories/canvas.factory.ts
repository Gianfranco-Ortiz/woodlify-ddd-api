import { Canvas } from "../entities/canvas.entity";
import { CanvasId } from "../value-objects/canvas-id.value";

export class CanvasFactory {
    static createFrom(
        name: string,
        createdAt: Date,
        lastMofication: Date
    ): Canvas{
        return new Canvas(
            CanvasId.create(0),
            name,
            createdAt,
            lastMofication
        );
    }
    static createWithId(
        canvasId: CanvasId,
        name: string,
        createdAt: Date,
        lastMofication: Date
    ): Canvas {
        return new Canvas(
            canvasId,
            name,
            createdAt,
            lastMofication
        )
    }
}