import React from 'react'
import R from 'ramda'

import Sprite, { spriteSize } from './Sprite'

const cellStyle = pos => ({
  display: 'inline-block',
  verticalAlign: 'top',
  background: groundColour(pos),
  border: '1px solid',
  borderColor: surroundColour(pos),
})

const groundColour = ({ x, y }) => ((x+y) % 2) ? '#0a0' : '#1c1'
const surroundColour = ({ x }) => x < 5 ? 'red' : 'blue'

const WebCell = ({ cell, pos }) => cell
  ? <Sprite style={cellStyle(pos)} unit={cell}/>
  : <div style={{ ...cellStyle(pos), height: spriteSize, width: spriteSize }} />

const WebBoard = ({ board }) => (
  <div>
    {R.transpose(board.grid).map((row, y) => (
      <div key={y}>
        {row.map((cell, x) => <WebCell key={x} cell={cell} pos={{ x, y }} />)}
      </div>
    ))}
  </div>
)

export default WebBoard
