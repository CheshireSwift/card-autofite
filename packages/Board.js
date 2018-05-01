/* @flow */
import _ from 'lodash'

import { type Formation, isValid } from './Formation'
import Unit from './Unit'

export class Board {
  static gridWidth = 5
  static gridHeight = 5

  grid: Array<Array<Unit>>

  constructor(formations: [Formation, Formation]) {
    if (!_.every(formations, isValid)) {
      throw new Error()
    }

    this.grid = Array(Board.gridWidth * 2).fill().map(() =>
      Array(Board.gridHeight).fill(null)
    )

    const [leftFormation, rightFormation] = formations
    _.forEach(leftFormation, ({ unit, position: [x, y] }) => {
      this.grid[x][y] = unit
    })
    _.forEach(rightFormation, ({ unit, position: [x, y] }) => {
      this.grid[Board.gridWidth + x][y] = unit
    })
  }

  get units() {
    return _(this.grid).flatten().filter().value()
  }
}

export default Board
