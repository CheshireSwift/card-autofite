import React from 'react'

export const LayeredSheetImage = ({ layers, sheet, cellSize, style }) => {
  const sheetOffset = sheetIndex => `-${(sheetIndex - 1) * cellSize}px`
  const cellOffset = ([ xi, yi ]) =>
    `${sheetOffset(xi)} ${sheetOffset(yi)}`

  return (
    <div style={{ ...style, position: 'relative', width: cellSize, height: cellSize }}>
      {layers.map(({ text, offset }) => (
        <img
          alt={text}
          title={text}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: cellSize,
            width: cellSize,
            objectFit: 'none',
            objectPosition: cellOffset(offset),
          }}
          src={sheet}
        />
      ))}
    </div>
  )
}

export default LayeredSheetImage
