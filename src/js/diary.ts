import { Action, RecordInterface } from "./types";

class LinkedListData {
  data: RecordInterface;
  next: LinkedListData | null;
  prev: LinkedListData | null;

  constructor(data: RecordInterface) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export default class LinkedList {
  head: LinkedListData | null;
  tail: LinkedListData | null;
  current: LinkedListData | null;

  constructor(data: RecordInterface[] = []) {
    this.head = null;
    this.tail = null;
    this.current = null;

    console.log(data);
    data.length > 0 &&
      data.forEach((item) => {
        this.add(item);
      });
  }

  add(data: RecordInterface): void {
    const node = new LinkedListData(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.current = node;
    } else if (this.tail !== null) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
      this.current = node;
    }
  }

  getAll(): RecordInterface[] {
    let diary: RecordInterface[] = [];
    let current = this.head;
    while (current !== null) {
      diary.push(current.data);
      current = current.next;
    }

    return diary;
  }

  getLength(): number {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  getRandom(): RecordInterface | null {
    const length = this.getLength();
    if (length === 0) {
      return null
    };

    const randomIndex = Math.floor(Math.random() * length);
    let current = this.head;
    for (let i = 0; i < randomIndex; i++) {
      if (current) current = current.next;
    }

    return current ? current.data : null;
  }

  deleteById(id: number) {
    let current = this.head;
    while (current !== null) {
      if (current.data.id === id) {
        if (current.prev !== null) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next !== null) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
      }

      current = current.next;
    }
  }

  getNextNode(): RecordInterface | null {
    if (this.current === null) {
      return null;
    }

    if (this.current.next === null) {
      return null;
    }

    this.current = this.current.next;
    return this.current.data;
  }

  getPrevNode(): RecordInterface | null {
    if (this.current === null) {
      return null;
    }

    if (this.current.prev === null) {
      return null;
    }

    this.current = this.current.prev;
    return this.current.data;
  }
}
