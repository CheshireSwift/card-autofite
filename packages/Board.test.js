/* @flow */
import Unit from './Unit'

import Board from './Board'

import diff from 'jest-diff'

describe('the board', () => {
  it('specifies the width and height of a grid', () => {
    expect(Board.gridWidth).toBeDefined()
    expect(Board.gridHeight).toBeDefined()
  })

  it('returns the list of units', () => {
    const units = [
      new Unit(),
      new Unit(),
      new Unit(),
    ]

    const board = new Board([
      [
        { unit: units[0], position: [0,0] },
        { unit: units[1], position: [1,0] },
      ],
      [
        { unit: units[2], position: [2,0] },
      ],
    ])

    expect(new Set(board.units)).toEqual(new Set(units))
  })
})

