/* @flow */
import Unit from '../autofite-engine/Unit'

import * as Formation from '../autofite-engine/Formation'

describe('a formation', () => {
  describe('being validated', () => {
    it('can pass', () => {
      expect(Formation.isValid([
        { unit: new Unit(), position: [0, 1] },
        { unit: new Unit(), position: [1, 0] },
        { unit: new Unit(), position: [1, 1] },
      ])).toBe(true)
    })

    it('is not valid when units fall outside the game board', () => {
      expect(Formation.isValid([ { unit: new Unit(), position: [0, 500] } ])).toBe(false)
      expect(Formation.isValid([ { unit: new Unit(), position: [500, 0] } ])).toBe(false)
    })

    it('is not valid when two units are in the same location', () => {
      expect(Formation.isValid([
        { unit: new Unit(), position: [1, 2] },
        { unit: new Unit(), position: [1, 2] },
      ])).toBe(false)
    })
  })
})
