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
    eventHub.addListeners([ otherUnit ])
    eventHub.raise(event)

    expect(otherUnit.raise).toHaveBeenLastCalledWith(event)
  })

  it('runs events from the queue until there are none left', () => {
    const eventHub = new EventHub()
    const unit = new SpyUnit()
    unit.raise.mockImplementationOnce(() => [ secondEvent ])
    const firstEvent = { unit, type: 'WIBBLE' }
    const secondEvent = { unit, type: 'BIBBLE' }

    eventHub.push([ firstEvent ])
    eventHub.resolveQueue()

    expect(eventHub.queue).toHaveLength(0)
    expect(unit.raise).toHaveBeenCalledTimes(2)
  })

  it('raises events on universal listeners', () => {
    const listener = jest.fn()
    const unit = new SpyUnit()
    const event = { unit, type: 'WIBBLE' }

    const eventHub = new EventHub()
    eventHub.addUniversalListener(listener)
    eventHub.raise(event)

    expect(listener).toHaveBeenCalledWith(event)
  })
})
