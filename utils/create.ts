const fs = require('fs')

function getTsTemplate(name: string): string {
  return `function ${name}() {

}

module.exports = ${name}
`
}

function getTestTemplate(name: string): string {
  return `const { test, expect } = require('@jest/globals')
const ${name} = require('./${name}')

describe('${name}', () => {
  test.skip('', () => {

  })
})
`
}

function toCamelCase(str: string) {
  return str.replace(/[-_][a-z]/g, (rep: string) => rep[1].toUpperCase())
}

function create(): void {
  const args: string[] = process.argv.slice(2)
  let [type, name] = args

  if (!type || !name) {
    console.log('Please provide name')
    return
  } else if (!['ds', 'algs'].includes(type)) {
    console.log('Type should be either "ds" or "args"')
    return
  }

  name = toCamelCase(name)
  const dir = `./${type}/${name}`
  if (fs.existsSync(dir)) {
    console.log('This folder already exsists.')
    return
  }

  fs.mkdirSync(dir)
  fs.writeFileSync(`${dir}/${name}.ts`, getTsTemplate(name))
  fs.writeFileSync(`${dir}/${name}.test.js`, getTestTemplate(name))
  console.log('done!')
}

create()
