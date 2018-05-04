import {
  Code,
  Image,
  Slide,
  Text,
} from 'spectacle'
import golden from 'assets/img/golden.png'
import React from 'react'

const GoldenSample = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Image src={ golden } />
    <Text>
      Four good-as-gold columns: <Code>1U</Code>,
      { ' ' }
      <Code>1.618U</Code>, <Code>2.618U</Code>, <Code>4.236U</Code>.
    </Text>
  </Slide>
))

export default GoldenSample
