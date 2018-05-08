/* eslint-disable no-console */
import Processor from 'autofite-engine/Processor'
import Sadbag from 'autofite-engine/Sadbag'

const processor = new Processor({
  formations: [
    [ { unit: new Sadbag(), position: [ 0, 0 ] } ],
    [ { unit: new Sadbag(), position: [ 0, 0 ] } ],
  ],
})

console.log(processor.board.units.map(unit =>
  `${unit.constructor.name}: ${unit.health}/${unit.health}`
).join('\n'))

while (!processor.winState) {
  processor.runTurn()

  console.log(processor.board.units.map(unit =>
    `${unit.constructor.name}: ${unit.health}/${unit.health}`
  ).join('\n'))
}

console.log(processor.winState)
