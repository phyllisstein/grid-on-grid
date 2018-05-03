import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const ForMe = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      What’s in it for me?
    </Heading>
  </Slide>
))

export default ForMe
