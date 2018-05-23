/* @flow */
import { Unit, type Handler } from './Unit'

export class Gladbag extends Unit {
  static maxHealth = 4

  TURN_START: Handler<void> = () => {
    this.health += 1
  }
}

export default Gladbag
