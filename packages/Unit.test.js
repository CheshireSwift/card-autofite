/* @flow */
import Unit from './Unit'

describe('a unit', () => {
  it('loses health when taking damage', () => {
    const initialUnit = new Unit({ maxHealth: 3 })
    const { unit } = initialUnit.raise({ type: 'DAMAGE', data: { damage: 2 } })
    expect(unit.health).toBe(1)
  })

  it('dies when it runs out of health', () => {
    const initialUnit = new Unit({ maxHealth: 3 })
    const { unit, events } = initialUnit.raise({ type: 'DAMAGE', data: { damage: 3 } })
    expect(events[0]).toEqual({ type: 'DEATH', data: { preUnit: initialUnit } })
  })
})
