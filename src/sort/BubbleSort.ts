export interface Sortable {
    length: number;
    swap(firstIndex: number, secondIndex: number): void;
    compare(firstIndex: number, secondIndex: number): boolean;
}

export class BubbleSort {
    constructor(public collection: Sortable) {
    }

    sort(): void {
        const { length } = this.collection;

        for (let i = length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }
}