/* @flow */
import EventTypes from './EventType'

import Sadbag from './Sadbag'

describe('the Sadbag', () => {
  it('starts at 3 HP', () => {
    const sadbag = new Sadbag()
    expect(sadbag.health).toBe(3)
  })

  it('loses 1 HP each turn', () => {
    const initialSadbag = new Sadbag()
    const { unit: resolvedSadbag } = initialSadbag.raise({ unit: initialSadbag, type: EventTypes.TURN_START })
    expect(resolvedSadbag.health).toBe(2)
  })
})

