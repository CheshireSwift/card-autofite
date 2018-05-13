/* @flow */
import { Unit, type Handler } from './Unit'
import EventTypes from './EventType'

export class Infantry extends Unit {
  static maxHealth = 3

  TURN_START: Handler<void> = board => {
    const offsets = Unit.range('OX')
    return board.unitsInRange(this, offsets).map(target => ({
      unit: target,
      type: EventTypes.DAMAGE,
      data: { damage: 1 },
    }))
  }
}

export default Infantry
