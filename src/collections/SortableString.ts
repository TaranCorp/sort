import { BubbleSort, Sortable } from "../sort/BubbleSort";

export class SortableString extends BubbleSort {
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(firstIndex: number, secondIndex: number): boolean {
        return this.data.charCodeAt(firstIndex) > this.data.charCodeAt(secondIndex);
    }

    swap(firstIndex: number, secondIndex: number): void {
        const left = this.data.slice(0, firstIndex);
        const mid = this.data.slice(firstIndex + 1, secondIndex);
        const right = this.data.slice(secondIndex + 1);
         
        this.data = left + 
                    this.data.charAt(secondIndex) + 
                    mid + 
                    this.data.charAt(firstIndex) + 
                    right;
    }
}