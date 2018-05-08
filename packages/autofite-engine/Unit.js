/* @flow */
import _ from 'lodash'

import { type EventType } from './EventType'

export type GameEvent = {
  unit: Unit,
  type: EventType,
  data?: any,
}

type DamageData = { damage: number }

export type Handler<D> = D => ?Array<GameEvent>

export class Unit {
  static maxHealth = 0

  health: number
  maxHealth: number
  listenFor: ?$ReadOnlyArray<EventType>
  $key: EventType; $value: any

  constructor() {
    this.maxHealth = this.constructor.maxHealth
    this.health = this.maxHealth
  }

  get listenFor() {
    return []
  }

  raise(event: GameEvent): Array<GameEvent> {
    const handler: Handler<any> = (this[event.type]: ?Handler<any>) || _.constant()
    return handler(event.data) || []
  }

  DAMAGE: Handler<DamageData> = ({ damage }) => {
    this.health -= damage
  }
}

export default Unit
