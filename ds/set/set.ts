class MySet {
  private collection: any[] = []

  public has(item: any): boolean {
    const exists = this.collection.includes(item)
    return exists
  }

  public values(): any[] {
    return [...this.collection]
  }

  public add(item: any): boolean {
    if (!this.collection.includes(item)) {
      this.collection.push(item)
      return true
    }
    return false
  }

  public remove(item: any): boolean {
    if (!this.has(item)) {
      return false
    }

    this.collection = this.collection.filter((collectionItem) => {
      collectionItem !== item
    })
    return true
  }

  public size(): number {
    return this.collection.length
  }

  public union(otherSet: MySet): MySet {
    const unionSet = new MySet()
    otherSet.values().forEach((val) => {
      unionSet.add(val)
    })
    this.values().forEach((val) => {
      unionSet.add(val)
    })
    return unionSet
  }

  public intersection(otherSet: MySet): MySet {
    const interSet = new MySet()
    this.values().forEach((val) => {
      if (otherSet.has(val)) {
        interSet.add(val)
      }
    })
    return interSet
  }

  public difference(otherSet: MySet): MySet {
    const diffSet = new MySet()
    this.values().forEach((val) => {
      if (!otherSet.has(val)) {
        diffSet.add(val)
      }
    })
    return diffSet
  }

  public subset(otherSet: MySet): boolean {
    return this.values().every((val) => otherSet.has(val))
  }
}

module.exports = MySet
