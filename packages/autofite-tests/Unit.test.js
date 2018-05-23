/* @flow */
import _ from 'lodash'
import Board from 'autofite-engine/Board'
import EventTypes from 'autofite-engine/EventType'

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

  it('resets to max health when overhealed', () => {
    class SomeUnit extends Unit {
      static maxHealth = 3
    }

    const unit = new SomeUnit()
    unit.health = 5
    unit.raise({ unit, type: 'OVERHEAL' })
    expect(unit.health).toBe(unit.maxHealth)
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

  describe('with helper methods', () => {
    it('can define attacks easily', () => {
      const damage = 2

      class LobUnit extends Unit {
        WAFFLE = board => this.attack(board, 'OXX', damage)
      }

      const unit = new LobUnit()

      const targets = [ new Unit(), new Unit(), new Unit() ]
      targets.forEach((u, i) => u.maxHealth = i)

      const board = Board.makeBoard([
        [ { unit, position: [ 4, 1 ] } ],
        [
          { unit: targets[0], position: [ 2, 1 ] },
          { unit: targets[1], position: [ 3, 1 ] },
          { unit: targets[2], position: [ 4, 1 ] },
        ],
      ])

      const events = unit.raise({ type: 'WAFFLE' }, board)
      const sortByHealth = e => _.sortBy(e, 'unit.maxHealth')

      expect(sortByHealth(events)).toEqual(sortByHealth([
        { unit: targets[1], source: unit, type: EventTypes.DAMAGE, data: { damage } },
        { unit: targets[2], source: unit, type: EventTypes.DAMAGE, data: { damage } },
      ]))
    })
  })

  describe('checking its state', () => {
    let unit

    beforeEach(() => {
      unit = new Unit()
      unit.maxHealth = 1
      unit.health = 1
    })

    it('raises no events by default', () => {
      expect(unit.checkState()).toHaveLength(0)
    })

    it('raises death events when out of health', () => {
      unit.health = 0
      expect(unit.checkState()).toContainEqual({ unit, type: EventTypes.DEATH })
    })

    it('raises overheal events when over maximum health', () => {
      unit.health = 2
      expect(unit.checkState()).toContainEqual({ unit, type: EventTypes.OVERHEAL })
    })
  })
})
