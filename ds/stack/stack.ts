interface ZeroIndexLike {
  [prop: number]: any
}

class Stack {
  private count: number = 0
  private storage: ZeroIndexLike = {}

  get peek(): any {
    if (this.count === 0) {
      return undefined
    }
    return this.storage[this.count - 1]
  }

  get length(): number {
    return this.count
  }

  push(val: any): void {
    this.storage[this.count] = val
    this.count++
  }

  pop(): any {
    if (this.count === 0) {
      return undefined
    }

    this.count--
    const removed = this.storage[this.count]
    delete this.storage[this.count]
    return removed
  }
}

module.exports = Stack
