/* @flow */
import SpyUnit from './SpyUnit'

import EventType from 'autofite-engine/EventType'

import EventHub from 'autofite-engine/EventHub'

describe('the event hub', () => {
  it('raises events on their specified unit', () => {
    const eventHub = new EventHub()
    const unit = new SpyUnit()

    const event = { unit, type: EventType.TURN_START }
    eventHub.raise(event)

    expect(unit.raise).toHaveBeenCalledWith(event)
  })

  it('raises events on units listening for that type of event', () => {
    class ListenerUnit extends SpyUnit {
      get listenFor() {
        return [ 'WIBBLE' ]
      }
    }

    const eventHub = new EventHub()
    const unit = new SpyUnit()
    const otherUnit = new ListenerUnit()

    const event = { unit, type: 'WIBBLE' }
    eventHub.addListener(otherUnit)
    eventHub.raise(event)

    expect(otherUnit.raise).toHaveBeenLastCalledWith(event)
  })
})
