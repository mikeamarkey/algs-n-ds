const { test, expect } = require('@jest/globals')
const binarySearch = require('./binary-search')

describe('binary search', () => {
  test('empty array return null', () => {
    expect(binarySearch(10, [])).toBe(null)
  })

  test('value should be found', () => {
    expect(binarySearch(20, [10, 20, 30, 40, 50])).toBe(1)
  })

  test('value should not be found', () => {
    expect(binarySearch(20, [11, 22, 33, 44, 55])).toBe(null)
  })

  test('single value array should return searchedValue', () => {
    expect(binarySearch(10, [10])).toBe(0)
  })
})
