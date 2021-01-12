const fs = require('fs')

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function toCamelCase(str: string) {
  return str.replace(/[-_][a-z]/g, (rep: string) => rep[1].toUpperCase())
}

function getTsTemplate(type: string, name: string): string {
  let template: string

  if (type === 'ds') {
    const capitalized = capitalize(name)
    template = `class ${capitalized} {

}

module.exports = ${capitalized}
`
  } else {
    template = `function ${name}() {

}

module.exports = ${name}
`
  }

  return template
}

function getTestTemplate(type: string, name: string): string {
  const importName = type === 'ds' ? capitalize(name) : name
  return `const { test, expect } = require('@jest/globals')
const ${importName} = require('./${name}')

describe('${importName}', () => {
  test.skip('', () => {

  })
})
`
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
  fs.writeFileSync(`${dir}/${name}.ts`, getTsTemplate(type, name))
  fs.writeFileSync(`${dir}/${name}.test.js`, getTestTemplate(type, name))
  console.log('done!')
}

create()
