/* @flow */
import _ from 'lodash'

import EventTypes from './EventType'
import { type Formation } from './Formation'
import Board from './Board'
import EventHub from './EventHub'

export class Processor {
  board: Board
  hub: EventHub

  constructor({ formations }: { formations: [Formation, Formation] }) {
    this.board = Board.makeBoard(formations)
    this.hub = new EventHub()

    this.hub.addListeners(this.board.units)
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
}

export default Processor
