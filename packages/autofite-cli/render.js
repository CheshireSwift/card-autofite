import _ from 'lodash'
import stripAnsi from 'strip-ansi'
import chalk from 'chalk'
import Board from 'autofite-engine/Board'

const iconColors = [
  chalk.bgYellow,
  chalk.bgMagenta,
  chalk.bgBlue,
  chalk.bgGreen,
  chalk.bgCyan,
]

const borderBlock = ' '
const emptyCell = '·'

export function icon(unit) {
  if (unit.constructor.icon) {
    return unit.constructor.icon
  }

  const name = unit.constructor.name

  const colorIndex = _.reduce(name, (sum, letter) => sum + letter.charCodeAt(0), 0) % iconColors.length
  const bgColor = iconColors[colorIndex]
  const fullColor = (unit.health / unit.maxHealth) < 0.334 ? bgColor.red : bgColor.black

  const letter = name.substring(0, 1)
  return fullColor.bold(letter)
}

function cell(cell, index) {
  if (cell) {
    return icon(cell)
  } else {
    return index < Board.gridWidth ? chalk.red(emptyCell) : chalk.blue(emptyCell)
  }
}

function row(row) {
  return chalk.bgRed(borderBlock) + row.map(cell).join('') + chalk.bgBlue(borderBlock)
}

export function grid(grid) {
  const borderHalf = Array(Board.gridWidth + 1).fill(borderBlock).join('')
  const borderRow = chalk.bgRed(borderHalf) + chalk.bgBlue(borderHalf)

  const gridRows = _.unzip(grid).map(row).join('\n')

  return `${borderRow}
${gridRows}
${borderRow}`
}

export function join(stringBlocks, divider = '') {
  const paddedBlocks = _(stringBlocks)
    .map(stringBlock => stringBlock.split('\n'))
    .map((lineBlock, $, lineBlocks) => {
      const blockHeight = _.max(_.map(lineBlocks, 'length'))
      const blockWidth = _.max(_.map(lineBlock, line => stripAnsi(line).length))
      const paddedBlock = _.range(blockHeight).map(i => _.get(lineBlock, i, ''))
      return paddedBlock.map(semiline =>
        semiline + Array(blockWidth - stripAnsi(semiline).length).fill(' ').join('')
      )
    })

  return paddedBlocks.unzip()
    .map(row => _.trimEnd(row.join(divider)))
    .join('\n')
}
