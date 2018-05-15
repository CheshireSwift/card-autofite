/* @flow */
import _ from 'lodash'
import hash from 'object-hash'

import EventTypes from './EventType'
import { type Formation } from './Formation'
import Board from './Board'
import { EventHub, type Listener } from './EventHub'

export class Processor {
  static WinState = {
    DRAW: 'Draw',
    PLAYER_1_WIN: 'Player 1 wins',
    PLAYER_2_WIN: 'Player 2 wins',
  }

  board: Board
  hub: EventHub
  turnHashes: Array<string> = []

  constructor({ formations }: { formations: [Formation, Formation] }) {
    this.board = Board.makeBoard(formations)
    this.hub = new EventHub()

    this.hub.addListeners(this.board.units())
  }

  addListener(listener: Listener) {
    this.hub.addUniversalListener(listener)
  }

  runTurn() {
    const turnStartEvents = _.map(this.board.units(), unit => (
      { unit, type: EventTypes.TURN_START }
    ))
    this.hub.push(turnStartEvents)

    while (this.hub.resolveQueue(this.board)) {
      const { board, events } = this.board.checkState()
      this.board = board
      this.hub.push(events)
    }

    this.turnHashes.unshift(this.hash)
  }

  get hash(): string {
    return hash({
      hashGrid: this.board.grid.map(column =>
        column.map(cell =>
          cell && [
            cell.constructor.name,
            cell.state,
          ]
        )
      ),
    })
  }

  get winState(): ?$Values<typeof Processor.WinState> {
    const hashLength = this.turnHashes.length
    const loopDetected = (hashLength > 1) && (hashLength !== _.uniq(this.turnHashes).length)
    if (loopDetected || _.isEmpty(this.board.units())) {
      return Processor.WinState.DRAW
    }

    if (_.isEmpty(this.board.units(1))) {
      return Processor.WinState.PLAYER_1_WIN
    }

    if (_.isEmpty(this.board.units(0))) {
      return Processor.WinState.PLAYER_2_WIN
    }

    return null
  }
}

export default Processor
