/* @flow */
import _ from 'lodash'

import { findIndex2D } from './util'
import { EventTypes, type EventType } from './EventType'
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

  state: {
    maxHealth: number,
      health: number,
  }

  player: 0 | 1
  listenFor: ?$ReadOnlyArray<EventType>
  $key: EventType; $value: any

  static range(diagram: string, sourceChar: string =  'O', targetChar: string = 'X'): Array<[number, number]> {
    const rows = diagram.trim().split('\n').map(row => row.trim())
    const [ rootY, rootX ] = findIndex2D(rows, sourceChar)
    return _.flatten(_.map(rows, (row, y) =>
      _.filter(_.map(row, (cell, x): ?[number, number] =>
        cell === targetChar ? [ x - rootX, y - rootY ] : null
      ))
    ))
  }

  constructor() {
    this.state = {
      maxHealth: this.constructor.maxHealth,
      health: this.constructor.maxHealth,
    }
  }

  get listenFor() {
    return []
  }

  get health(): number {
    return this.state.health
  }

  set health(v: number) {
    this.state.health = v
  }

  get maxHealth(): number {
    return this.state.maxHealth
  }

  set maxHealth(v: number) {
    this.state.maxHealth = v
  }

  raise(event: GameEvent, board: Board): Array<GameEvent> {
    const handler: Handler<any> = (this[event.type]: ?Handler<any>) || _.constant()
    return _.forEach(handler(board, event.data), event => { event.source = this }) || []
  }

  attack(board: Board, diagram: string, damage: number): Array<GameEvent>  {
    const offsets = Unit.range(diagram)
    return board.unitsInRange(this, offsets).map(target => ({
      unit: target,
      type: EventTypes.DAMAGE,
      data: { damage },
    }))
  }

  DAMAGE: Handler<DamageData> = (board, { damage }) => {
    this.health -= damage
  }
}

export default Unit
