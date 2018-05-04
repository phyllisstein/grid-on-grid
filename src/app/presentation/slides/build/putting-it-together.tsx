import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const PuttingItTogether = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      Putting It Together
    </Heading>
    <Heading size={ 4 }>
      Flailing at a keyboard for your entertainment and edification.
    </Heading>
  </Slide>
))

export default PuttingItTogether
