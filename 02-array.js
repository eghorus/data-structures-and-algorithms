export default class JArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /* O(n) */
  printValues() {
    let string = "";
    Object.values(this.data).forEach((value, index) => {
      string += `${value}${index < this.length - 1 ? ", " : ""}`;
    });
    console.log(string);
  }

  /* O(n) */
  printEntries() {
    let string = "";
    Object.entries(this.data).forEach(([key, value], index) => {
      string += `[${key}, ${value}]${index < this.length - 1 ? ", " : ""}`;
    });
    console.log(string);
  }

  /* O(1) */
  get(index) {
    return this.data[index];
  }

  /* O(1) */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /* O(1) */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /* O(n) */
  insert(index, item) {
    this.unshift(index);
    this.data[index] = item;
    this.length++;
    return this.length;
  }

  /* O(n) */
  delete(index) {
    const deletedItem = this.data[index];
    delete this.data[index];
    this.shift(index);
    this.length--;
    return deletedItem;
  }

  /* O(n) */
  shift(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }

  /* O(n) */
  unshift(index) {
    this.data[this.length] = "NEW";
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = "INSERT";
  }

  /* O(n) */
  splice(start, deleteCount, [...newItems] = []) {
    const slotsChangeCount = newItems.length - deleteCount;

    if (slotsChangeCount > 0) {
      for (let i = this.length - 1 + slotsChangeCount; i >= start; i--) {
        if (i > start + newItems.length - 1) {
          this.data[i] = this.data[i - slotsChangeCount];
        } else {
          this.data[i] = newItems[newItems.length + (i - start - newItems.length)];
        }
      }
    }

    if (slotsChangeCount < 0) {
      for (let i = start; i < this.length; i++) {
        if (i < start + newItems.length) {
          this.data[i] = newItems[i - start];
        } else if (i < this.length + slotsChangeCount) {
          this.data[i] = this.data[i + slotsChangeCount * -1];
        } else {
          delete this.data[i];
        }
      }
    }

    if (slotsChangeCount === 0) {
      for (let i = start; i < newItems.length + start; i++) {
        this.data[i] = newItems[i - start];
      }
    }

    this.length = this.length + slotsChangeCount;
  }
}
