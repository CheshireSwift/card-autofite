/* @flow */
import Board from 'autofite-engine/Board'
import Sadbag from 'autofite-engine/Sadbag'
import EventTypes from 'autofite-engine/EventType'

import Infantry from 'autofite-engine/Infantry'

describe('infantry', () => {
  it('attacks the square in front', () => {
    const infantry = new Infantry()
    const target = new Sadbag()
    const board = Board.makeBoard([
      [ { unit: infantry, position: [ 4, 1 ] } ],
      [ { unit: target, position: [ 4, 1 ] } ],
    ])

    const events = infantry.raise({ type: 'TURN_START' }, board)

    expect(events).toEqual([ {
      unit: target,
      type: EventTypes.DAMAGE,
      source: infantry,
      data: { damage: 1 },
    } ])
  })
})
