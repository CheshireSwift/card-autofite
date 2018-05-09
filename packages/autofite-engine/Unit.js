/* @flow */
import _ from 'lodash'

import { type EventType } from './EventType'
import Board from './Board'

export type GameEvent = {
  unit: Unit,
  source?: Unit,
  type: EventType,
  data?: any,
}

type DamageData = { damage: number }

export type Handler<D> = (Board, D) => ?Array<GameEvent>

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

  raise(event: GameEvent, board: Board): Array<GameEvent> {
    const handler: Handler<any> = (this[event.type]: ?Handler<any>) || _.constant()
    return _.forEach(handler(board, event.data), event => { event.source = this }) || []
  }

  DAMAGE: Handler<DamageData> = (board, { damage }) => {
    this.health -= damage
  }
}

export default Unit
