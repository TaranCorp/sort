import { BubbleSort, Sortable } from "../sort/BubbleSort";

export class NumbersCollection extends BubbleSort {
    constructor(public data: number[]) {    
        super();
    }

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