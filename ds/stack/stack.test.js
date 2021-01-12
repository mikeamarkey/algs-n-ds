const { test, expect } = require('@jest/globals')
const Stack = require('./stack')

describe('stack', () => {
  test('Stack.push + Stack.length', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.length).toBe(2)
  })

  test('Stack.peek', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.peek).toBe(2)
  })

  test('Empty pop, peek', () => {
    const stack = new Stack()
    const popped = stack.pop()
    expect(popped).toBe(undefined)
    expect(stack.peek).toBe(undefined)
    expect(stack.length).toBe(0)
  })

  test('Stack.pop', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    const popped = stack.pop()
    expect(popped).toBe(2)
  })

  test('Stack multiple functions', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.pop()
    stack.push(3)
    expect(stack.peek).toBe(3)
    expect(stack.pop()).toBe(3)
    expect(stack.peek).toBe(1)
    expect(stack.length).toBe(1)
  })
})
