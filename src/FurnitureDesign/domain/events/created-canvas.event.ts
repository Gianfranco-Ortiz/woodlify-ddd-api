export class CreatedCanvasEvent {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly createdAt: Date,
        public readonly lastMofication: Date
    ) {}
}