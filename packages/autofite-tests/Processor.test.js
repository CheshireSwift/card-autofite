/* @flow */
import EventTypes from 'autofite-engine/EventType'
import SpyUnit from './SpyUnit'

import Processor from 'autofite-engine/Processor'

describe('the turn processor', () => {
  let processor
  let units
  let positions

  beforeEach(() => {
    units = [ new SpyUnit(), new SpyUnit(), new SpyUnit() ]
    positions = [
      [ 0, 1 ],
      [ 1, 1 ],
      [ 1, 0 ],
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
    unit.raise.mockImplementationOnce(() => [ event ])
    processor.runTurn()
    expect(unit.raise).toHaveBeenCalledWith(event)
  })

  it('allows units to listen for a type of event raised on any unit', () => {
    const WIGGLE = 'WIGGLE'
    class ListenerUnit extends SpyUnit {
      get listenFor() { return [ WIGGLE ] }
    }

    const listenerUnit = new ListenerUnit()
    const unit = new SpyUnit()
    const event = { unit, type: WIGGLE }
    unit.raise.mockImplementationOnce(() => [ event ])

    const processor = new Processor({
      formations: [
        [ { unit, position: positions[0] } ],
        [ { unit: listenerUnit, position: positions[1] } ],
      ],
    })
    processor.runTurn()

    expect(listenerUnit.raise).toHaveBeenCalledWith(event)
  })

  it('allows universal event listeners to listen to events universally', () => {
    const listener = jest.fn()
    processor.addListener(listener)

    processor.runTurn()

    expect(listener).toHaveBeenCalledWith(expect.objectContaining({ type: EventTypes.TURN_START }))
  })

  it('checks for dead units when the queue is empty and removes them', () => {
    units[0].health = 0
    processor.runTurn()
    expect(processor.board.units).not.toContain(units[0])
  })

  it('raises death events for dead units and reruns the queue as required', () => {
    units[0].health = 0
    const raise = jest.fn()
    processor.hub.addListeners([ ({ raise, listenFor: [ EventTypes.DEATH ] }: any) ])
    processor.runTurn()
    expect(raise).toHaveBeenCalledWith({ unit: units[0], type: EventTypes.DEATH })
  })

  it('indicates the game has ended in a draw when all units are dead', () => {
    processor.runTurn()
    expect(processor.winState).toBe(null)
    units.forEach(unit => { unit.health = 0 })
    processor.runTurn()
    expect(processor.winState).toBe(Processor.WinState.DRAW)
  })
})
