/* @flow */
import SpyUnit from './SpyUnit'
import EventTypes from 'autofite-engine/EventType'

import Board from 'autofite-engine/Board'

describe('the board', () => {
  it('specifies the width and height of a grid', () => {
    expect(Board.gridWidth).toBeDefined()
    expect(Board.gridHeight).toBeDefined()
  })

  it('returns the list of units', () => {
    const units = [
      new SpyUnit(),
      new SpyUnit(),
      new SpyUnit(),
    ]

    const board = Board.makeBoard([
      [
        { unit: units[0], position: [ 0, 0 ] },
        { unit: units[1], position: [ 1, 0 ] },
      ],
      [
        { unit: units[2], position: [ 2, 0 ] },
      ],
    ])

    expect(new Set(board.units)).toEqual(new Set(units))
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
        expect(stateCheck.board.units).not.toContain(unit)
      })

      it('raises death events for removed units', () => {
        expect(stateCheck.events).toEqual([ { unit, type: EventTypes.DEATH } ])
      })
    })
  })
})
