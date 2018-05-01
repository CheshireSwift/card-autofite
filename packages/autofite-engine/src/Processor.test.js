/* @flow */
import _ from 'lodash'

import EventTypes from './EventType'
import Unit from './Unit'

import Processor from './Processor'

const generateSpyUnits = count => _(count)
  .range()
  .map(() => new Unit())
  .map(unit => {
    unit.raise = jest.fn(_.constant([]))
    return unit
  })
  .value()

describe('the turn processor', () => {
  let processor
  let units
  let positions

  beforeEach(() => {
    units = generateSpyUnits(3)
    positions = [
      [0, 1],
      [1, 1],
      [1, 0],
    ]

    processor = new Processor({
      formations: [
        [
          { unit: units[0], position: positions[0] },
          { unit: units[1], position: positions[1] },
        ],
        [
          { unit: units[2], position: positions[2] },
        ],
      ],
    })
  })

  it('raises a turn event for each unit on the board', () => {
    processor.runTurn()

    units.forEach(unit => {
      expect(unit.raise).toHaveBeenCalledWith({ unit, type: EventTypes.TURN_START })
    })
  })

  it('runs newly generated events as part of the turn', () => {
    const unit = units[0]
    const event = { unit, type: 'WIGGLE' }
    unit.raise.mockImplementationOnce(() => [event])
    processor.runTurn()
    expect(unit.raise).toHaveBeenCalledWith(event)
  })

  it('allows units to listen for a type of event raised on any unit') // handle "when another unit dies", "when a friendly unit takes damage", etc.
})
