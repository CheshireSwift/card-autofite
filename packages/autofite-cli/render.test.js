import 'colors'
import Unit from 'autofite-engine/Unit'

import * as render from './render'

describe('text rendering the board', () => {
  it('generates colours for units by class', () => {
    class OneUnit extends Unit {}
    class TwoUnit extends Unit {}
    expect(render.icon(new OneUnit())).toBe('O'.bgMagenta.bold.black)
    expect(render.icon(new TwoUnit())).toBe('T'.bgYellow.bold.black)
  })

  it('indicates low HP units', () => {
    const unit = new Unit()
    unit.maxHealth = 3
    unit.health = 1
    expect(render.icon(unit)).toBe('U'.bgMagenta.bold.red)
  })

  it('uses icon overrides where specified', () => {
    class PrettyUnit extends Unit {
      static icon = '🤣'
    }

    const unit = new PrettyUnit()
    expect(render.icon(unit)).toBe(PrettyUnit.icon)
  })
})
