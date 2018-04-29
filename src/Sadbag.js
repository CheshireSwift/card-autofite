/* @flow */
import { Unit, type Handler } from './Unit'
import EventTypes from './EventType'

export default class Sadbag extends Unit {
  constructor() {
    super({ maxHealth: 3 })
  }

  TURN_START: Handler<void> = () => ({
    unit: this.clone({ health: this.health - 1 }),
    events: [],
  })
}
