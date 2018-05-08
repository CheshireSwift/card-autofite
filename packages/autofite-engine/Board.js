/* @flow */
import _ from 'lodash'

import { type Formation, isValid } from './Formation'
import { Unit, type GameEvent } from './Unit'
import EventTypes from './EventType'

export class Board {
  static gridWidth = 5
  static gridHeight = 5

  grid: Array<Array<?Unit>>

  static makeBoard(formations: [Formation, Formation]) {
    if (!_.every(formations, isValid)) {
      throw new Error()
    }

    const grid = Array(Board.gridWidth * 2).fill().map(() =>
      Array(Board.gridHeight).fill(null)
    )

    const [ leftFormation, rightFormation ] = formations
    _.forEach(leftFormation, ({ unit, position: [ x, y ] }) => {
      grid[x][y] = unit
    })
    _.forEach(rightFormation, ({ unit, position: [ x, y ] }) => {
      grid[Board.gridWidth + x][y] = unit
    })

    return new Board(grid)
  }

  constructor(grid: Array<Array<?Unit>>) {
    this.grid = grid
  }

  get units() {
    return _(this.grid).flatten().filter().value()
  }

  checkState(): { board: Board, events: Array<GameEvent> } {
    const deadUnits = this.units.filter(unit => unit && unit.health === 0)
    const grid = this.grid.map(row => row.map(cell => deadUnits.includes(cell) ? null : cell))

    return {
      board: new Board(grid),
      events: deadUnits.map(unit => ({ unit, type: EventTypes.DEATH })),
    }
  }
}

export default Board
