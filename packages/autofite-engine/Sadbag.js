/* @flow */
import { Unit, type Handler } from './Unit'

export default class Sadbag extends Unit {
  static maxHealth = 3
  constructor() {
    super()
  }

  TURN_START: Handler<void> = () => {
    this.health -= 1
  }
}
