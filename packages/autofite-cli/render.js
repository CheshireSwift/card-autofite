import 'colors'
import _ from 'lodash'
import Board from 'autofite-engine/Board'

const iconColors = [
  'bgYellow',
  'bgMagenta',
  'bgBlue',
  'bgGreen',
  'bgCyan',
]

const borderBlock = ' '
const emptyCell = '·'

export function icon(unit) {
  if (unit.constructor.icon) {
    return unit.constructor.icon
  }

  const name = unit.constructor.name

  const colorIndex = _.reduce(name, (sum, letter) => sum + letter.charCodeAt(0), 0) % iconColors.length
  const letter = name.substring(0, 1)
  const color = iconColors[colorIndex]
  const base = letter[color].bold

  return (unit.health / unit.maxHealth) < 0.334 ? base.red : base.black
}

function cell(cell, index) {
  if (cell) {
    return icon(cell)
  } else {
    return index < Board.gridWidth ? emptyCell.red : emptyCell.blue
  }
}

function row(row) {
  return borderBlock.bgRed + row.map(cell).join('') + borderBlock.bgBlue
}

export function grid(grid) {
  const borderHalf = Array(Board.gridWidth + 1).fill(borderBlock).join('')
  const borderRow = borderHalf.bgRed + borderHalf.bgBlue

  const gridRows = _.unzip(grid).map(row).join('\n')

  return `${borderRow}
${gridRows}
${borderRow}`
}
