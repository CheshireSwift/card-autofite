/* @flow */
import Unit from './Unit'

describe('a unit', () => {
  it('loses health when taking damage', () => {
    const unit = new Unit({ maxHealth: 3 })
    unit.raise({ unit, type: 'DAMAGE', data: { damage: 2 } })
    expect(unit.health).toBe(1)
  })
})
