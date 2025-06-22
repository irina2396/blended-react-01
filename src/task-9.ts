interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: ["Alice", "Bob", "Mango"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}

console.log(getLastElement(numberContainer));
console.log(getLastElement(stringContainer));
