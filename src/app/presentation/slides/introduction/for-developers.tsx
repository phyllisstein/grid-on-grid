import {
  Heading,
  Slide,
  Text,
} from 'spectacle'
import React from 'react'

const ForDevelopers = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading size={ 6 }>Developers</Heading>
    <Text>
      “A grid means I don’t have to think.”
    </Text>
  </Slide>
))

export default ForDevelopers
