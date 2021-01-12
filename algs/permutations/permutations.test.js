const { test, expect } = require('@jest/globals')
const permutations = require('./permutations')

describe.skip('permutations', () => {
  test('empty array should return empty array', () => {
    expect(permutations([])).toEqual([])
  })

  test('simple permutations', () => {
    expect(permutations([1, 2])).toEqual([[1, 2], [2, 1]])
  })

  test('should not repeat', () => {
    expect(permutations([1, 1])).toEqual([[1, 1]])
  })
})
