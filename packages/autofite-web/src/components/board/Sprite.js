import React from 'react'

import LayeredSheetImage from './LayeredSheetImage'

import spritesheet from './medieval.png'

export const spriteSize = 48

const sprites = {
  Gladbag: [ 4, 7 ],
  Badbag: [ 3, 7 ],
  Infantry: [ 7, 16 ],
  Sadbag: [ 5, 7 ],
  Bigbag: [ 5, 6 ],
}

const numbers = [
  [ 1, 21 ], // 0
  [ 1, 22 ], // 1
  [ 2, 22 ], // 2
  [ 3, 22 ], // 3
  [ 1, 23 ], // 4
  [ 2, 23 ], // 5
  [ 3, 23 ], // 6
  [ 1, 24 ], // 7
  [ 2, 24 ], // 8
  [ 3, 24 ], // 9
]

export const Sprite = ({ unit, style }) => {
  const unitName = unit.constructor.name
  const sprite = sprites[unitName] || [ 7, 34 ]

  return (
    <LayeredSheetImage
      layers={[
        { offset: sprite, text: unitInfo(unit) },
        { offset: numbers[unit.health], text: `${unit.health}/${unit.maxHealth} HP` },
      ]}
      sheet={spritesheet}
      cellSize={spriteSize}
      style={style}
    />
  )
}

const unitInfo = unit => `${unit.constructor.name}
${unit.health}/${unit.maxHealth}`

export default Sprite
