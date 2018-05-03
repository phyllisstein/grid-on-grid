import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const PatternAndPrinciple = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      Pattern and principle.
    </Heading>
  </Slide>
))

export default PatternAndPrinciple
