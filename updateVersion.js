const fs = require('fs')
const path = require('path')

const UTF8 = 'utf8'

function start() {
  const packagePath = path.join(__dirname, 'package.json')
  const versionPath = path.join(__dirname, 'version_data.json')
  const localVersionPath = path.join(
    __dirname,
    '/server',
    '/api',
    '/configuration',
    '/data',
    'version_data.json'
  )

  const packageJson = JSON.parse(fs.readFileSync(packagePath, UTF8))
  const version = JSON.parse(fs.readFileSync(versionPath, UTF8))

  console.log(
    `version changing from: ${version.version} to: ${packageJson.version}.`
  )

  const newVersion = { version: packageJson.version }

  fs.writeFileSync(versionPath, JSON.stringify(newVersion, null, 2))
  fs.writeFileSync(localVersionPath, JSON.stringify(newVersion, null, 2))
  console.log('version update successful.')
}

start()
