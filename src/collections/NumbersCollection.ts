import { Sortable } from "../sort/BubbleSort";

export class NumbersCollection implements Sortable {
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length;
    }

    swap(firstIndex: number, secondIndex: number): void {
        this.data[firstIndex] = this.data[firstIndex] + this.data[secondIndex];
        this.data[secondIndex] = this.data[firstIndex] - this.data[secondIndex];
        this.data[firstIndex] = this.data[firstIndex] - this.data[secondIndex];
    }
 
    compare(firstIndex: number, secondIndex: number): boolean {
        return this.data[firstIndex] > this.data[secondIndex];
    }
}