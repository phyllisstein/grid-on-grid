import {
  BlockQuote,
  Cite,
  Slide,
} from 'spectacle'
import { Quote } from './styled-grid-is-good'
import React from 'react'

const GridIsGood = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <BlockQuote>
      <Quote>Grid is good.</Quote>
      <Cite>
        Web standards enthusiast Gordon
        Gekko, <span style={{ fontStyle: 'normal' }}>Wall Street</span> (1987)
      </Cite>
    </BlockQuote>
  </Slide>
))

export default GridIsGood
