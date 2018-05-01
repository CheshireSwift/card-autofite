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

type UnitData = { maxHealth?: number, health?: number }

export class Unit {
  health: number
  maxHealth: number
  $key: EventType; $value: any

  constructor(data: UnitData = {}) {
    this.maxHealth = data.maxHealth || 0
    this.health = data.health || this.maxHealth
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
