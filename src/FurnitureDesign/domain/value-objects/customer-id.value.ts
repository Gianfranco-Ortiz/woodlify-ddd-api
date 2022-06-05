export class CustomerId {
    private readonly _id: number;
    constructor(id: number) {
        this._id = id;
    }
    static create(id: number): CustomerId {
        return new CustomerId(id);
    }
    getCustomerId(): number {
        return this._id;
    } 
}