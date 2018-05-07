/* @flow */
import _ from 'lodash'

import Unit from './Unit'
import Board from './Board'

export type Formation = Array<{ unit: Unit, position: [number, number]}>

const positionIsValid = ({ position }) => {
  if (position[0] >= Board.gridWidth || position[1] >= Board.gridHeight) {
    return false
  }

  return true
}

const containsNoDupes = formation => _(formation).countBy(({ position: [ x, y ] }) => `${x},${y}`).every(count => count <= 1)

export const isValid = (formation: Formation): boolean => _.every(formation, positionIsValid) && containsNoDupes(formation)
