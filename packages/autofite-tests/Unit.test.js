/* @flow */
import Unit from 'autofite-engine/Unit'

describe('a unit', () => {
  it('reads max health on subclasses', () => {
    class AbsoluteUnit extends Unit {
      static maxHealth = 5
    }

    const ladOfSize = new AbsoluteUnit()
    expect(ladOfSize.maxHealth).toBe(5)
  })

  it('loses health when taking damage', () => {
    class SomeUnit extends Unit {
      static maxHealth = 3
    }

    const unit = new SomeUnit()
    unit.raise({ unit, type: 'DAMAGE', data: { damage: 2 } })
    expect(unit.health).toBe(1)
  })

  it('generates ranges from diagrams', () => {
    expect(new Set(Unit.range(`
      XX.X.
      .XOXX
      X...X
      .X...
    `))).toEqual(new Set([
      [ -2, -1 ], [ -1, -1 ], [ 1, -1 ],
      [ -1, 0 ], [ 1, 0 ], [ 2, 0 ],
      [ -2, 1 ], [ 2, 1 ],
      [ -1, 2 ],
    ]))
  })
})
