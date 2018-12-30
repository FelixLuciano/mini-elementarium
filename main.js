'use strict'

const Chalk = require('chalk')
const Figlet = require('figlet')
const Prompts = require('prompts')
const { spawn } = require('child_process')

const developmentProcess = require('./.webpack/dev-runner.js')
const productionProcess = require('./.webpack/build-runner.js')


const projectName = process.env.npm_package_name.replace(/-/g, '\n')
const projectDescription = process.env.npm_package_description
const projectVersion = process.env.npm_package_version

const figletHeader = Figlet.textSync(projectName, {
  font: 'Cybermedium',
  horizontalLayout: 'default',
  verticalLayout: 'default'
})


const leaveProcess = function() {
  console.log(Chalk.yellow`Leaving...`)
  setTimeout(console.clear, 2000)
}



const greeting = function() {
  console.log(Chalk.greenBright(figletHeader))

  console.log(Chalk.green(projectDescription))
  console.log('Version:', Chalk.green(projectVersion), '\n\n')
}


const init = async function() {

  console.clear()
  greeting()

  const { response } = await Prompts({
    type: 'select',
    name: 'response',
    message: 'Select an action',
    choices: [
      {title: 'Start development server', value: developmentProcess},
      {title: 'Run build process', value: productionProcess},
      {title: ' ', value: leaveProcess, disabled: true},
      {title: 'Leave', value: leaveProcess}
    ]
  })


  if(!response) return leaveProcess()

  console.clear()
  greeting()

  response.call()
}


init()
