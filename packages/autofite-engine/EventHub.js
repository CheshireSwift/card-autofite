/* @flow */
import _ from 'lodash'
import { Unit, type GameEvent } from './Unit'
import { type EventType } from './EventType'

export class EventHub {
  listeners: { [EventType]: Set<Unit> }

  constructor() {
    this.listeners = new Proxy({}, {
      get(target, name) {
        target[name] = target[name] || new Set()
        return target[name]
      },
    })
  }

  raise(event: GameEvent): Array<GameEvent> {
    const primaryEvents = event.unit.raise(event)

    const listeners: any = [ ...this.listeners[event.type] ]
    return [ ...primaryEvents, ..._.flatMap(listeners, listener => listener.raise(event)) ]
  }

  addListener(unit: Unit) {
    unit.listenFor.forEach(type => {
      this.listeners[type].add(unit)
    })
  }
}

export default EventHub
