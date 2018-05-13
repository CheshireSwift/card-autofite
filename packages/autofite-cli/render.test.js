import chalk from 'chalk'
import Unit from 'autofite-engine/Unit'

import * as render from './render'

describe('text rendering the board', () => {
  it('generates colours for units by class', () => {
    class OneUnit extends Unit {}
    class TwoUnit extends Unit {}
    expect(render.icon(new OneUnit())).toBe(chalk.bgMagenta.black.bold('O'))
    expect(render.icon(new TwoUnit())).toBe(chalk.bgYellow.black.bold('T'))
  })

  it('indicates low HP units', () => {
    const unit = new Unit()
    unit.maxHealth = 3
    unit.health = 1
    expect(render.icon(unit)).toBe(chalk.bgMagenta.red.bold('U'))
  })

  it('uses icon overrides where specified', () => {
    class PrettyUnit extends Unit {
      static icon = '🤣'
    }

    const unit = new PrettyUnit()
    expect(render.icon(unit)).toBe(PrettyUnit.icon)
  })

  describe('joining text elements into columns', () => {
    it('takes muiltiline strings and puts them side-by-side', () => {
      expect(render.join([ 'a\nb', 'c\nd' ])).toBe('ac\nbd')
    })

    it('handles lines of different lengths', () => {
      expect(render.join([ 'aaa\na', 'b\nb' ])).toBe('aaab\na  b')
    })

    it('handles leading columns of different lengths', () => {
      expect(render.join([ 'aa\na', 'b' ])).toBe('aab\na')
    })

    it('handles trailing columns of different lengths', () => {
      expect(render.join([ 'aa', 'b\nb' ])).toBe('aab\n  b')
    })

    it('accepts an optional column divider', () => {
      expect(render.join([ 'a\nb', 'c\nd' ], '!"£')).toBe('a!"£c\nb!"£d')
    })

    it('handles giant gnarly messes of multiple blocks', () => {
      const a = `
aaa
aa
aaaa
`
      const b = `
b
bbbbbbbbbb
bbbbbb
b
bb
`
      const c = `
 ccccccccc

cccc
`

      expect(render.join([ a, b, c ]).trim()).toBe(`
aaa b          ccccccccc
aa  bbbbbbbbbb
aaaabbbbbb    cccc
    b
    bb
`.trim())
    })
  })

  it('handles coloured text', () => {
    const a = chalk`
{red a}
aa
a
`.trim()

    const b = `
b
b
`.trim()

    const expectedOutput = chalk`
{red a} b
aab
a
`.trim()
    expect(render.join([ a, b ])).toBe(expectedOutput)
  })
})
