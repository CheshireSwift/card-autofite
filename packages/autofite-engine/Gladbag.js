/* @flow */
import { Unit, type Handler } from './Unit'

export class Gladbag extends Unit {
  static maxHealth = 3

  TURN_START: Handler<void> = () => {
    this.health = Math.min(this.maxHealth, this.health + 1)
  }
}

export default Gladbag
