import _ from 'lodash'
import 'colors'

const colors = [
  'red',
  'yellow',
  'magenta',
  'white',
  'black',
]

export function icon(unit) {
  if (!unit) {
    return ' '
  }

  const name = unit.constructor.name

  const colorIndex = _.reduce(name, (sum, letter) => sum + letter.charCodeAt(0), 0) % colors.length
  const base = name.substring(0, 1)[colors[colorIndex]].bold
  return (unit.health / unit.maxHealth) < 0.334 ? base.dim : base
}

export function grid(grid) {
  return _.unzip(grid).map(
    row => row.map(icon).join('')
  ).join('\n').bgGreen
}
