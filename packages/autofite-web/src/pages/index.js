import React from 'react'

import WebBoard from '../components/board/WebBoard'

import Processor from 'autofite-engine/Processor'
import Badbag from 'autofite-engine/Badbag'
import Bigbag from 'autofite-engine/Bigbag'
import Gladbag from 'autofite-engine/Gladbag'
import Sadbag from 'autofite-engine/Sadbag'
import Infantry from 'autofite-engine/Infantry'

const processor = new Processor({
  formations: [
    [
      { unit: new Badbag(), position: [ 4, 0 ] },
      { unit: new Badbag(), position: [ 2, 0 ] },
      { unit: new Gladbag(), position: [ 4, 3 ] },
    ],
    [
      { unit: new Infantry(), position: [ 4, 3 ] },
      { unit: new Sadbag(), position: [ 1, 1 ] },
      { unit: new Bigbag(), position: [ 4, 4 ] },
    ],
  ],
})

class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ margin: 'auto' }}>
        <WebBoard board={processor.board} />
        <button disabled={!!processor.winState} onClick={() => { processor.runTurn(); this.forceUpdate() }}>go</button>
      </div>
    )
  }
}

export default IndexPage
