/* @flow */
import _ from 'lodash'
import { Unit, type GameEvent } from './Unit'
import { type EventType } from './EventType'

export class EventHub {
  listeners: { [EventType]: Set<Unit> }
  queue: Array<GameEvent> = []

  constructor() {
    this.listeners = new Proxy({}, {
      get(target, name) {
        target[name] = target[name] || new Set()
        return target[name]
      },
    })
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

  resolveQueue(): boolean {
    if (!this.queue.length) {
      return false
    }

    let event
    // eslint-disable-next-line no-cond-assign
    while (event = this.queue.shift()) {
      const events = this.raise(event)
      this.push(events)
    }

    return true
  }

  raise(event: GameEvent): Array<GameEvent> {
    const primaryEvents = event.unit.raise(event)

    const listeners: any = [ ...this.listeners[event.type] ]
    return [ ...primaryEvents, ..._.flatMap(listeners, listener => listener.raise(event)) ]
  }
}

export default EventHub
