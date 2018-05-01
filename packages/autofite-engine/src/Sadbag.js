/* @flow */
import { Unit, type Handler } from './Unit'

export default class Sadbag extends Unit {
  constructor() {
    super({ maxHealth: 3 })
  }

  TURN_START: Handler<void> = () => {
    this.health -= 1
  }
}
