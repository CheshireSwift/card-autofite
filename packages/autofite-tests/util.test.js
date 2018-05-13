/* @flow */
import { findIndex2D } from 'autofite-engine/util'

describe('findIndex2D', () => {
  it('finds an element in a nested array', () => {
    const indices = findIndex2D([
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ],
    ], 6)

    expect(indices).toEqual([ 1, 2 ])
  })

  it('finds characters in a string array', () => {
    const indices = findIndex2D([
      '123',
      '456',
      '789',
    ], '6')

    expect(indices).toEqual([ 1, 2 ])
  })
})
