const { test, expect } = require('@jest/globals')
const MySet = require('./set')

describe('Set', () => {
  test('Set.add', () => {
    const set = new MySet()
    set.add('one')
    expect(set.size()).toBe(1)
    expect(set.values()).toEqual(['one'])
  })

  test('Set.remove', () => {
    const set = new MySet()
    set.add('one')
    set.remove('two')
    expect(set.size()).toBe(1)
    expect(set.values()).toEqual(['one'])
    set.remove('one')
    expect(set.size()).toBe(0)
    expect(set.values()).toEqual([])
  })

  test('Set.union', () => {
    const set1 = new MySet()
    set1.add('one')
    const set2 = new MySet()
    set2.add('two')

    const union = set1.union(set2)
    expect(union.size()).toEqual(2)
    expect(union.has('one')).toBe(true)
    expect(union.has('two')).toBe(true)
    expect(union.values()).toEqual(['two', 'one'])
  })

  test('Set.intersection', () => {
    const set1 = new MySet()
    set1.add('one')
    set1.add('three')
    const set2 = new MySet()
    set2.add('two')
    set2.add('three')

    const intersection = set1.intersection(set2)
    expect(intersection.size()).toBe(1)
    expect(intersection.has('three')).toBe(true)
  })

  test('Set.difference', () => {
    const set1 = new MySet()
    set1.add('one')
    set1.add('two')
    const set2 = new MySet()
    set2.add('two')
    set2.add('three')

    const difference = set1.difference(set2)
    expect(difference.size()).toBe(1)
    expect(difference.has('one')).toBe(true)

    const difference2 = set2.difference(set1)
    expect(difference2.size()).toBe(1)
    expect(difference2.has('three')).toBe(true)
  })

  test('Set.subset', () => {
    const set1 = new MySet()
    set1.add('one')
    set1.add('two')
    set1.add('three')

    const set2 = new MySet()
    set2.add('one')
    set2.add('three')

    expect(set2.subset(set1)).toBe(true)
    set2.add('four')
    expect(set2.subset(set1)).toBe(false)
  })
})
