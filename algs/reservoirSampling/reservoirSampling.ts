function reservoirSampling(choices: any[], count: number): any[] {
  if (choices.length <= count) {
    return choices
  }

  const result = new Array(count)
  for (let i = 0; i < count; i++) {
    result[i] = choices[i]
  }

  for (let i = count; i < choices.length; i++) {
    let pos = Math.floor(Math.random() * (i + 1))
    if (pos < count) {
      result[pos] = choices[i]
    }
  }

  return result
}

module.exports = reservoirSampling
