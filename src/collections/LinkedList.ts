import { Sortable } from "../sort/BubbleSort";
import { Node } from "./Node";

export class LinkedList implements Sortable{
    head: Node | null = null;

    constructor() {}

    get length() {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while (node.nextNode) {
            length++;
            node = node.nextNode;
        }

        return length;
    }

    add(value: number): void {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.nextNode) {
            tail = tail.nextNode;
        }


        tail.nextNode = node;


    }

    at(index: number): Node {
        if (index >= this.length) {
            throw new Error("Index out of bounds!")
        }
        if (!this.head) {
            throw new Error("Empty List Exception!")
        }

        let node: Node | null = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.nextNode;
        }

        throw new Error("Index out of bounds!")
    }

    compare(firstIndex: number, secondIndex: number): boolean {
        if (!this.head) {
            throw new Error("Empty List")
        }

        return this.at(firstIndex).data > this.at(secondIndex).data;
    }

    swap(firstIndex: number, secondIndex: number): void {
        if (!this.head) {
            throw new Error("Empty List")
        }

        const leftNode = this.at(firstIndex);
        const rightNode = this.at(secondIndex);

        const leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    }

    print(): void {
        if (!this.head) {
            return ;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.nextNode;
        }
    }
}