/* @flow */
import { Unit, type GameEvent } from 'autofite-engine/Unit'

export class SpyUnit extends Unit {
  static maxHealth = 1

  constructor() {
    super()
  }

  raise: (GameEvent => Array<GameEvent>) = jest.fn(() => [])
}

export default SpyUnit
