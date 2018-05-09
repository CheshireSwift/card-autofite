/* @flow */
import { Unit, type Handler } from './Unit'
import EventTypes from './EventType'

export default class BadBag extends Unit {
  static maxHealth = 3
  constructor() {
    super()
  }

  TURN_START: Handler<void> = board => {
    return board.units().map(unit => ({
      unit,
      type: EventTypes.DAMAGE,
      data: {
        damage: 1,
      },
    }))
  }
}
