/* @flow */
import _ from 'lodash'

import { findIndex2D } from './util'
import { type Formation, isValid } from './Formation'
import { Unit, type GameEvent } from './Unit'
import { EventTypes, type EventType } from './EventType'

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
      unit.player = 0
      grid[x][y] = unit
    })
    _.forEach(rightFormation, ({ unit, position: [ x, y ] }) => {
      unit.player = 1
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

  checkState(): $ReadOnlyArray<GameEvent> {
    type LocEvent = { event: GameEvent, x: number, y: number }

    const stateHandlers: { [EventType]: LocEvent => void } = {
      [EventTypes.DEATH]: ({ x, y }) => {
        this.grid[x][y] = null
      },
    }

    const eventsInCell = (x: number) => (
      (cell: ?Unit, y: number): Array<LocEvent> => (
        cell ? cell.checkState().map(event => ({ event, x, y })) : []
      )
    )

    const eventsInColumn  = (column: Array<?Unit>, x: number): Array<LocEvent> => (
      _.flatMap(column, eventsInCell(x))
    )

    const grid = this.grid
    const locEvents: Array<LocEvent> = _.flatMap(grid, eventsInColumn)

    locEvents.forEach(locEvent => {
      const handler = stateHandlers[(locEvent.event.type: string)]
      handler && handler(locEvent)
    })

    return _.map(locEvents, 'event')
  }

  perspectiveGrid(player: PlayerIndex): Array<Array<?Unit>> {
    return player ? this.grid.slice().reverse() : this.grid
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
    const unitOnLeftSide = rawX < Board.gridWidth
    const rootX = unitOnLeftSide ? rawX : reverse(rawX)
    const unitAtOffset = ([ dX, dY ]) => this.perspectiveGrid(unitOnLeftSide ? 0 : 1)[rootX + dX][rootY + dY]
    return _(offsets)
      .map(unitAtOffset)
      .filter()
      .value()
  }
}

export default Board
