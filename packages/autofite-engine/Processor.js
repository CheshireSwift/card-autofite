/* @flow */
import _ from 'lodash'

import EventTypes from './EventType'
import { type Formation } from './Formation'
import Board from './Board'
import { type GameEvent } from './Unit'
import EventHub from './EventHub'

export class Processor {
  board: Board
  queue: Array<GameEvent>
  hub: EventHub

  constructor({ formations }: { formations: [Formation, Formation] }) {
    this.board = new Board(formations)
    this.queue = []
    this.hub = new EventHub()

    this.board.units.forEach(unit => {
      this.hub.addListener(unit)
    })
  }

  runTurn() {
    this.push(_.map(this.board.units, unit => ({ unit, type: EventTypes.TURN_START })))
    this.resolveQueue()
  }

  push(events: Array<GameEvent>) {
    this.queue.push(...events)
  }

  resolveQueue() {
    let event
    // eslint-disable-next-line no-cond-assign
    while (event = this.queue.shift()) {
      const events = this.hub.raise(event)
      this.push(events)
    }
  }
}

export default Processor
