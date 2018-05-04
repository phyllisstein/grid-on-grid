import {
  Code,
  Image,
  Slide,
  Text,
} from 'spectacle'
import goldenArranged from 'assets/img/golden-arranged.png'
import React from 'react'

const GoldenArrangedSample = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Image src={ goldenArranged } />
    <Text>
      Let’s get them into an order we can design around: <Code>1U</Code> (left
      margin), <Code>1.618U</Code> (meta), <Code>4.236U</Code> (content),
      { ' ' }
      <Code>2.618U</Code> (right rail).
    </Text>
  </Slide>
))

export default GoldenArrangedSample
