import 'colors'
import Unit from 'autofite-engine/Unit'

import * as render from './render'

describe('text rendering the board', () => {
  it('generates colours for units by class', () => {
    class OneUnit extends Unit {}
    class TwoUnit extends Unit {}
    expect(render.icon(new OneUnit())).toBe('O'.yellow.bold)
    expect(render.icon(new TwoUnit())).toBe('T'.red.bold)
  })

  it('dims low HP units', () => {
    const unit = new Unit()
    unit.maxHealth = 3
    unit.health = 1
    expect(render.icon(unit)).toBe('U'.yellow.bold.dim)
  })

  it('renders a plain green field for an empty grid', () => {
    expect(render.grid([
      [ null, null ],
      [ null, null ],
    ])).toBe('  \n  '.bgGreen)
  })

  it('renders units into the grid', () => {
    const unitIcon = render.icon(new Unit())
    expect(render.grid([
      [ new Unit(), null ],
      [ null, new Unit() ],
    ])).toBe(`${unitIcon} \n ${unitIcon}`.bgGreen)
  })
})
