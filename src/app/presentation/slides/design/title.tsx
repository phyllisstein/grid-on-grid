import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const Title = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      Planning &amp; Design
    </Heading>
    <Heading size={ 4 }>
      Time for some <del>game theory</del> elementary math.
    </Heading>
  </Slide>
))

export default Title
