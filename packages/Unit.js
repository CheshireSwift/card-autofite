/* @flow */
const _ = require('lodash')

import { type EventType, EventTypes } from './EventType'

export type GameEvent = {
  unit: Unit,
  type: EventType,
  data?: any,
}

type DamageData = { damage: number }

type Results = { unit: Unit, events: Array<GameEvent> }
export type Handler<D> = D => Results

type UnitData = { maxHealth?: number, health?: number }

export class Unit {
  health: number
  maxHealth: number
  $key: EventType; $value: any

  constructor(data: UnitData = {}) {
    this.maxHealth = data.maxHealth || 0
    this.health = data.health || this.maxHealth
  }

  clone(data: UnitData = {}) {
    return new Unit({ ...this, ...data })
  }

  raise(event: GameEvent): Results {
    const handler = (this[event.type]: ?Handler<any>)
    return handler ? handler(event.data) : { unit: this, events: [] }
  }

  DAMAGE: Handler<DamageData> = ({ damage }) => {
    const unit = this.clone({ health: this.health - damage })
    return {
      unit,
      events: damage >= this.health ? [{ unit, type: EventTypes.DEATH }] : [],
    }
  }
}

export default Unit
