import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const Title = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      Grid on Grid
    </Heading>
    <Heading size={ 4 }>
      Building grid systems with the CSS Grid Module.
    </Heading>
  </Slide>
))

export default Title
