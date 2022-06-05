export class ModifiedDesignEvent {
    constructor(
        public readonly id: number,
        public readonly pieces: number[],
        public readonly designedAt: Date,
        public readonly designedBy: number
    ) {}
}