import {
  Heading,
  Slide,
} from 'spectacle'
import React from 'react'

const TwelveColumns = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>Twelve columns is for quitters.</Heading>
  </Slide>
))

export default TwelveColumns
