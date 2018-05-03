import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const OMGWTFBBQ = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      omgwtfbbq
    </Heading>
  </Slide>
))

export default OMGWTFBBQ
