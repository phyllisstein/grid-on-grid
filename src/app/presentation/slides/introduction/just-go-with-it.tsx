import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const JustGoWithIt = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>Just go with it.</Heading>
  </Slide>
))

export default JustGoWithIt
