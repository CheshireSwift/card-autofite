/* @flow */
import Board from './Board'

describe('the board', () => {
  it('specifies the width and height of a grid', () => {
    expect(Board.gridWidth).toBeDefined()
    expect(Board.gridHeight).toBeDefined()
  })
})

