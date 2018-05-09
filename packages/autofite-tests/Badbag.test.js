/* @flow */
import EventTypes from 'autofite-engine/EventType'
import Board from 'autofite-engine/Board'
import SpyUnit from './SpyUnit'

import Badbag from 'autofite-engine/Badbag'

describe('the Badbag', () => {
  it('starts at 3 HP', () => {
    const badbag = new Badbag()
    expect(badbag.health).toBe(3)
  })

  it('deals 1 damage to all units each turn', () => {
    const badbag = new Badbag()
    const otherUnit = new SpyUnit()
    const board = new Board([
      [ badbag, otherUnit ],
    ])

    const events = badbag.raise({ unit: badbag, type: EventTypes.TURN_START }, board)

    expect(events).toEqual(expect.arrayContaining([
      { unit: badbag, type: EventTypes.DAMAGE, source: badbag, data: { damage: 1 } },
      { unit: otherUnit, type: EventTypes.DAMAGE, source: badbag, data: { damage: 1 } },
    ]))
  })
})
