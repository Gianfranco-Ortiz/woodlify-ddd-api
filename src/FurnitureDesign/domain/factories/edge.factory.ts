import { Edge } from "../entities/edge.entity";
import { EdgeId } from "../value-objects/edge-id.value"

export class EdgeFactory {
    public static createFrom(
        x1:number,
        y1:number,
        z1:number,
        x2:number,
        y2:number,
        z2:number,
    ): Edge {
        return new Edge(
         EdgeId.create(0),
         x1,
         y1,
         z1,
         x2,
         y2,
         z2   
        );
    }

    public static createWithId(
        edgeId:EdgeId,
        x1:number,
        y1:number,
        z1:number,
        x2:number,
        y2:number,
        z2:number,
    ): Edge {
        return new Edge(
         edgeId,
         x1,
         y1,
         z1,
         x2,
         y2,
         z2   
        );
    }
}