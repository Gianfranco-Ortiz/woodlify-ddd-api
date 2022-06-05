export class CreatedDesignEvent {
    constructor (
        public readonly id: number,
        public readonly title: string,
        public readonly pieces: number[],
        public readonly designedAt: Date,
        public readonly designedBy: number
    ) {

    }
}