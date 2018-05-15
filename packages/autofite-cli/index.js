/* eslint-disable no-console */
import chalk from 'chalk'
import Processor from 'autofite-engine/Processor'
import Sadbag from 'autofite-engine/Sadbag'
import Badbag from 'autofite-engine/Badbag'
import Bigbag from 'autofite-engine/Bigbag'
import Gladbag from 'autofite-engine/Gladbag'
import Infantry from 'autofite-engine/Infantry'

import * as render from './render'

const processor = new Processor({
  formations: [
    [
      //{ unit: new Badbag(), position: [ 4, 0 ] },
      //{ unit: new Badbag(), position: [ 2, 0 ] },
      { unit: new Gladbag(), position: [ 4, 3 ] },
    ],
    [
      { unit: new Infantry(), position: [ 4, 3 ] },
      { unit: new Sadbag(), position: [ 1, 1 ] },
      //{ unit: new Bigbag(), position: [ 4, 3 ] },
    ],
  ],
})

const prettyUnit = unit => (unit.player ? chalk.blue : chalk.red)(unit.constructor.name)
let events = []
processor.addListener(event => {
  events.push(chalk`${prettyUnit(event.unit)} experiences {yellow ${event.type}}${event.source ? ` from ${prettyUnit(event.source)}` : ''}`)
})

function logState() {
  console.log('===================')

  const grid = render.grid(processor.board.grid)
  const unitStats = processor.board.units().map(unit =>
    `${prettyUnit(unit)}: ${unit.health}/${unit.maxHealth}`
  ).join('\n')
  console.log(render.join([
    [ grid, unitStats, processor.winState ].filter(x=>x).join('\n\n'),
    events.join('\n'),
  ], '   '))
  events = []
}

while (!processor.winState) {
  logState()
  processor.runTurn()

  //require('child_process').spawnSync('read _ ', { shell: true, stdio: [ 0, 1, 2 ] })
}
logState()
