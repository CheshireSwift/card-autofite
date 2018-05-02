/* @flow */
import Infantry from '../autofite-engine/Infantry'

xdescribe('infantry', () => {
  it('attacks the square in front', () => {
    const initialUnit = new Infantry()
    const { events } = initialUnit.raise({ type: 'TURN_START' })
    expect(events).toBe(1)
  })
})
