/* @flow */
import { Unit, type Handler } from './Unit'

export class Infantry extends Unit {
  static maxHealth = 3

  TURN_START: Handler<void> = board => this.attack(board, 'OX', 1)
}

export default Infantry
