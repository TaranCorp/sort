export interface Sortable {
    length: number; 
    swap(firstIndex: number, secondIndex: number): void;
    compare(firstIndex: number, secondIndex: number): boolean;
}

export abstract class BubbleSort { 
    abstract length: number; 
    abstract swap(firstIndex: number, secondIndex: number): void;
    abstract compare(firstIndex: number, secondIndex: number): boolean;

    sort(): void {
        const { length } = this;

        for (let i = length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}