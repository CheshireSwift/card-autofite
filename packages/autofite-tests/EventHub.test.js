/* @flow */
import SpyUnit from './SpyUnit'

//import eventHub

describe('the event hub', () => {
  it('raises events on their specified unit', () => {
    const unit = new SpyUnit()
    const eventHub = {}
    eventHub.raise(event)
    expect(unit.raise).toHaveBeenCalledWith(event)
  })
})
