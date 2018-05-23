/* @flow */
import _ from 'lodash'

export function findIndex2D<T, E: string | T>(grid: $ReadOnlyArray<string | $ReadOnlyArray<T>>, needle: E): ?[number, number] {
  const columnIndicesByRow = _.map(grid, row => _.findIndex(row, item => item === needle))

  const rowIndex = _.findIndex(columnIndicesByRow, columnIndex => columnIndex >= 0)
  if (rowIndex === -1) {
    return null
  }

  const columnIndex = columnIndicesByRow[rowIndex]
  return [ rowIndex, columnIndex ]
}
