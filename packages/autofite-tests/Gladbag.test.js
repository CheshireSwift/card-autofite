/* @flow */
import EventTypes from 'autofite-engine/EventType'
import Board from 'autofite-engine/Board'

import Gladbag from 'autofite-engine/Gladbag'

describe('the Gladbag', () => {
  it('gains 1 HP each turn when damaged', () => {
    const gladbag = new Gladbag()
    gladbag.health = 1
    gladbag.raise({ unit: gladbag, type: EventTypes.TURN_START }, new Board([]))
    expect(gladbag.health).toBe(2)
  })
})
