/* @flow */
import SpyUnit from './SpyUnit'
import EventTypes from 'autofite-engine/EventType'

import Board from 'autofite-engine/Board'

describe('the board', () => {
  it('specifies the width and height of a grid', () => {
    expect(Board.gridWidth).toBeDefined()
    expect(Board.gridHeight).toBeDefined()
  })

  describe('listing units', () => {
    const units = [
      new SpyUnit(),
      new SpyUnit(),
      new SpyUnit(),
    ]

    const board = Board.makeBoard([
      [
        { unit: units[0], position: [ 0, 2 ] },
        { unit: units[1], position: [ 1, 0 ] },
      ],
      [
        { unit: units[2], position: [ 3, 1 ] },
      ],
    ])

    it('returns the list of units', () => {
      expect(new Set(board.units())).toEqual(new Set(units))
    })

    it('returns the sublist of units for each player', () => {
      expect(new Set(board.units(0))).toEqual(new Set([ units[0], units[1] ]))
      expect(new Set(board.units(1))).toEqual(new Set([ units[2] ]))
    })

    it('returns the grid from the first player perspective', () => {
      expect(board.perspectiveGrid(0)).toEqual([
        [ null, null, units[0], null, null ],
        [ units[1], null, null, null, null ],
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],

        [ null, null, null, null, null ],
        [ null, units[2], null, null, null ],
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
      ])
    })

    it('returns the grid from the second player perspective', () => {
      expect(board.perspectiveGrid(1)).toEqual([
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
        [ null, units[2], null, null, null ],
        [ null, null, null, null, null ],

        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
        [ null, null, null, null, null ],
        [ units[1], null, null, null, null ],
        [ null, null, units[0], null, null ],
      ])
    })
  })

  describe('checking state', () => {
    describe('handling death', () => {
      let unit
      let dirtyBoard
      let stateCheck

      beforeEach(() => {
        unit = new SpyUnit()
        unit.health = 0
        dirtyBoard = new Board([ [ unit ] ])

        stateCheck = dirtyBoard.checkState()
      })

      it('removes units with 0 health', () => {
        expect(stateCheck.board.units()).not.toContain(unit)
      })

      it('removes units with negative health', () => {
        unit.health = -1
        expect(dirtyBoard.checkState().board.units()).not.toContain(unit)
      })

      it('raises death events for removed units', () => {
        expect(stateCheck.events).toEqual([ { unit, type: EventTypes.DEATH } ])
      })
    })
  })

  describe('inspecting ranges', () => {
    const units = [
      new SpyUnit(),
      new SpyUnit(),
      new SpyUnit(),

      new SpyUnit(),
      new SpyUnit(),
      new SpyUnit(),
    ]

    units.forEach((unit, i) => {
      unit.state.maxHealth = i // identify units in failure diff
    })

    const board = Board.makeBoard([
      [ { unit: units[0], position: [ 3, 1 ] }, { unit: units[1], position: [ 4, 1 ] }, { unit: units[2], position: [ 4, 2 ] } ],
      [ { unit: units[3], position: [ 4, 1 ] }, { unit: units[4], position: [ 3, 1 ] }, { unit: units[5], position: [ 3, 0 ] } ],
    ])
    /*
     Reference map of board from formation
     _____ _5___
     ___01 34___
     ____2 _____
     _____ _____
     _____ _____
     _____ _____
    */

    it('locates units by reference', () => {
      expect(board.location(units[1])).toEqual([ 4, 1 ])
    })

    it('returns the units in the specified relative spaces', () => {
      const selectedUnits = board.unitsInRange(units[1], [
        [ 1, 0 ],   // 3
        [ 2, 0 ],   // 4
        [ 2, -1 ],  // 5
        [ -2, 0 ],  // nothing
        [ -1, 0 ],  // 0
      ])

      expect(selectedUnits).toEqual([ units[3], units[4], units[5], units[0] ])
    })

    it('reflects offsets for a unit on second player side', () => {
      const selectedUnits = board.unitsInRange(units[3], [
        [ 1, 0 ],   // 1
        [ 1, -1 ],  // nothing
        [ -1, -1 ], // 5
      ])

      expect(selectedUnits).toEqual([ units[1], units[5] ])
    })
  })
})
