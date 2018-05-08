/* @flow */
import { Unit, type GameEvent } from 'autofite-engine/Unit'

export class SpyUnit extends Unit {
  constructor() {
    super()
  }

  raise: (GameEvent => Array<GameEvent>) = jest.fn(() => [])
}

export default SpyUnit
