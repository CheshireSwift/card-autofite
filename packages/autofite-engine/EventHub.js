/* @flow */
import _ from 'lodash'
import { Unit, type GameEvent } from './Unit'
import { type EventType } from './EventType'
import Board from './Board'

export type Listener = GameEvent => void

export class EventHub {
  listeners: { [EventType]: Set<Unit> }
  universalListeners: Array<Listener> = []
  queue: Array<GameEvent> = []

  constructor() {
    this.listeners = new Proxy({}, {
      get(target, name) {
        target[name] = target[name] || new Set()
        return target[name]
      },
    })
  }

  addUniversalListener(listener: Listener) {
    this.universalListeners.push(listener)
  }

  addListeners(units: Array<Unit>) {
    units.forEach(unit => {
      unit.listenFor.forEach(type => {
        this.listeners[type].add(unit)
      })
    })
  }

  push(events: Array<GameEvent>) {
    this.queue.push(...events)
  }

  resolveQueue(board: Board): boolean {
    if (!this.queue.length) {
      return false
    }

    let event
    // eslint-disable-next-line no-cond-assign
    while (event = this.queue.shift()) {
      const events = this.raise(event, board)
      this.push(events)
    }

    return true
  }

  raise(event: GameEvent, board: Board): Array<GameEvent> {
    this.universalListeners.forEach(listener => listener(event))

    const primaryEvents = event.unit.raise(event, board)
    const listeners: any = [ ...this.listeners[event.type] ]
    return [ ...primaryEvents, ..._.flatMap(listeners, (listener: Unit) => listener.raise(event, board)) ]
  }
}

export default EventHub
