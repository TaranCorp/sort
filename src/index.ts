import { LinkedList } from "./collections/LinkedList";
import { BubbleSort } from "./sort/BubbleSort";

const numbersList = new LinkedList();

numbersList.add(1);
numbersList.add(3);
numbersList.add(5);
numbersList.add(-3);
numbersList.add(0);
numbersList.add(0);
numbersList.add(99);
numbersList.add(-99);
numbersList.add(0.0001);

numbersList.sort();

numbersList.print();