/* eslint-disable no-console */
import Processor from 'autofite-engine/Processor'
import Sadbag from 'autofite-engine/Sadbag'
import Badbag from 'autofite-engine/Badbag'

const processor = new Processor({
  formations: [
    [ { unit: new Badbag(), position: [ 0, 0 ] } ],
    [ { unit: new Sadbag(), position: [ 1, 1 ] } ],
  ],
})

processor.addListener(event => {
  console.log(`${event.unit.constructor.name} experiences ${event.type}${event.source ? ` from ${event.source.constructor.name}` : ''}`)
})

function logState() {
  console.log('===================')
  console.log(render.grid(processor.board.grid))
  console.log(processor.board.units().map(unit =>
    `${unit.constructor.name}: ${unit.health}/${unit.maxHealth}`
  ).join('\n'))
}

while (!processor.winState) {
  logState()
  processor.runTurn()

  //require('child_process').spawnSync('read _ ', { shell: true, stdio: [ 0, 1, 2 ] })
}
logState()

console.log(processor.winState)
