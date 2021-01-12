const { test, expect } = require('@jest/globals')
const reservoirSampling = require('./reservoirSampling')

const testCount = 50

describe('reservoirSampling', () => {
  test('it should return empty array', () => {
    expect(reservoirSampling([], 1)).toEqual([])
  })

  test('it should return input if count is less than choices', () => {
    expect(reservoirSampling([1, 2, 3], 10)).toEqual([1, 2, 3])
  })

  test('it should return random number', () => {
    const input = [1, 2, 3]
    const set = new Set()
    const counter = {
      1: 0,
      2: 0,
      3: 0,
    }
    for (let i = 0; i < testCount; i++) {
      const result = reservoirSampling(input, 1)
      counter[result[0]]++
      set.add(JSON.stringify(result))
    }
    expect(set.size).toBe(input.length)
  })

  test('it should return random two numbers', () => {
    const input = [1, 2, 3]
    const set = new Set()
    for (let i = 0; i < testCount; i++) {
      const result = reservoirSampling(input, 2).sort((a, b) => a - b)
      const asString = JSON.stringify(result)
      set.add(asString)
    }
    expect(3).toBe(3)
  })

  test('it should return 9 random numbers', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const set = new Set()
    for (let i = 0; i < testCount; i++) {
      const result = reservoirSampling(input, 9).sort((a, b) => a - b)
      const asString = JSON.stringify(result)
      set.add(asString)
    }
    expect(3).toBe(3)
  })
})
