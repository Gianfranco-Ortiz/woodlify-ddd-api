export class UserId {
    private _id: number;
    private constructor(id: number) {}
    public getValue(): number {
        return this._id;
    }
    public static create(id: number): UserId {
        return new UserId(id);
    }
}