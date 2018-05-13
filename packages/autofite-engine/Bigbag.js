/* @flow */
import { Unit, type Handler } from './Unit'

export default class Bigbag extends Unit {
  static maxHealth = 7
  constructor() {
    super()
  }

  TURN_START: Handler<void> = () => {
    this.health -= 1
  }
}
