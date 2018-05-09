/* @flow */
import EventType from 'autofite-engine/EventType'
import Board from 'autofite-engine/Board'
import SpyUnit from './SpyUnit'

import EventHub from 'autofite-engine/EventHub'

describe('the event hub', () => {
  it('raises events on their specified unit, passing through the board', () => {
    const eventHub = new EventHub()
    const unit = new SpyUnit()
    const board = new Board([])

    const event = { unit, type: EventType.TURN_START }
    eventHub.raise(event, board)

    expect(unit.raise).toHaveBeenCalledWith(event, board)
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
    const board = new Board([])

    const event = { unit, type: 'WIBBLE' }
    eventHub.addListeners([ otherUnit ])
    eventHub.raise(event, board)

    expect(otherUnit.raise).toHaveBeenLastCalledWith(event, board)
  })

  it('runs events from the queue until there are none left', () => {
    const eventHub = new EventHub()
    const unit = new SpyUnit()
    unit.raise.mockImplementationOnce(() => [ secondEvent ])
    const firstEvent = { unit, type: 'WIBBLE' }
    const secondEvent = { unit, type: 'BIBBLE' }

    eventHub.push([ firstEvent ])
    eventHub.resolveQueue(new Board([]))

    expect(eventHub.queue).toHaveLength(0)
    expect(unit.raise).toHaveBeenCalledTimes(2)
  })

  it('raises events on universal listeners', () => {
    const listener = jest.fn()
    const unit = new SpyUnit()
    const event = { unit, type: 'WIBBLE' }

    const eventHub = new EventHub()
    eventHub.addUniversalListener(listener)
    eventHub.raise(event, new Board([]))

    expect(listener).toHaveBeenCalledWith(event)
  })
})
