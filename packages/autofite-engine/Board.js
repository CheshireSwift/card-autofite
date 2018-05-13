/* @flow */
import _ from 'lodash'

import { findIndex2D } from './util'
import { type Formation, isValid } from './Formation'
import { Unit, type GameEvent } from './Unit'
import EventTypes from './EventType'

type PlayerIndex = 0 | 1

function reverse(x) {
  return 2 * Board.gridWidth - x - 1
}

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
      grid[reverse(x)][y] = unit
    })

    return new Board(grid)
  }

  constructor(grid: Array<Array<?Unit>>) {
    this.grid = grid
  }

  units(player?: PlayerIndex) {
    return this.subgrid(player).flatten().filter().value()
  }

  subgrid(player?: PlayerIndex) {
    switch (player) {
      case 0:
        return _(this.grid).dropRight(Board.gridWidth)
      case 1:
        return _(this.grid).drop(Board.gridWidth)
      default:
        return _(this.grid)
    }
  }

  checkState(): { board: Board, events: Array<GameEvent> } {
    const deadUnits = this.units().filter(unit => unit && unit.health <= 0)
    const grid = this.grid.map(row => row.map(cell => deadUnits.includes(cell) ? null : cell))

    return {
      board: new Board(grid),
      events: deadUnits.map(unit => ({ unit, type: EventTypes.DEATH })),
    }
  }

  perspectiveGrid(player: PlayerIndex): Array<Array<?Unit>> {
    return player ? this.grid.reverse() : this.grid
  }

  location(unit: Unit): ?[number, number] {
    return findIndex2D(this.grid, unit)
  }

  unitsInRange(unit: Unit, offsets: $ReadOnlyArray<[number, number]>): Array<Unit> {
    const rootLocation = this.location(unit)
    if (!rootLocation) {
      return []
    }

    const [ rawX, rootY ] = rootLocation
    const unitOnFirstPlayerSide = rawX < Board.gridWidth
    const rootX = unitOnFirstPlayerSide ? rawX : reverse(rawX)
    const unitAtOffset = ([ dX, dY ]) => this.perspectiveGrid(unitOnFirstPlayerSide ? 0 : 1)[rootX + dX][rootY + dY]
    return _(offsets)
      .map(unitAtOffset)
      .filter()
      .value()
  }
}

export default Board
