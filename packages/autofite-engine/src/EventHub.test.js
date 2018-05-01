/* @flow */
import _ from 'lodash'

import Unit from './Unit'

describe('the event hub', () => {
  it('raises events on their specified unit', () => {
    const unit = new Unit()
    unit.raise = jest.fn(_.constant([]))

  })
})
