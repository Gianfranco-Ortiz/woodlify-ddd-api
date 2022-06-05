export class ImportedFileEvent {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly pieces: number[],
        public readonly designedAt: Date,
        public readonly designedBy: number
    ){}
}