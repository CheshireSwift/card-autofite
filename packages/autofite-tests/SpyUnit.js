/* @flow */
import { Unit, type UnitData } from 'autofite-engine/Unit'

export class SpyUnit extends Unit {
  constructor(params: UnitData) {
    super(params)
  }

  raise = jest.fn(() => [])
}

export default SpyUnit
