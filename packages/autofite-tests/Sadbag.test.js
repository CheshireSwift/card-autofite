/* @flow */
import EventTypes from '../autofite-engine/EventType'

import Sadbag from '../autofite-engine/Sadbag'

describe('the Sadbag', () => {
  it('starts at 3 HP', () => {
    const sadbag = new Sadbag()
    expect(sadbag.health).toBe(3)
  })

  it('loses 1 HP each turn', () => {
    const sadbag = new Sadbag()
    sadbag.raise({ unit: sadbag, type: EventTypes.TURN_START })
    expect(sadbag.health).toBe(2)
  })
})
