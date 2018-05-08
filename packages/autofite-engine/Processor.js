/* @flow */
import _ from 'lodash'

import EventTypes from './EventType'
import { type Formation } from './Formation'
import Board from './Board'
import { EventHub, type Listener } from './EventHub'

export class Processor {
  static WinState = {
    DRAW: 'DRAW',
  }

  board: Board
  hub: EventHub

  constructor({ formations }: { formations: [Formation, Formation] }) {
    this.board = Board.makeBoard(formations)
    this.hub = new EventHub()

    this.hub.addListeners(this.board.units)
  }

  addListener(listener: Listener) {
    this.hub.addUniversalListener(listener)
  }

  runTurn() {
    const turnStartEvents = _.map(this.board.units, unit => (
      { unit, type: EventTypes.TURN_START }
    ))
    this.hub.push(turnStartEvents)

    while (this.hub.resolveQueue()) {
      const { board, events } = this.board.checkState()
      this.board = board
      this.hub.push(events)
    }
  }

  get winState(): ?$Values<typeof Processor.WinState> {
    if (_.isEmpty(this.board.units)) {
      return Processor.WinState.DRAW
    }

    return null
  }
}

export default Processor
