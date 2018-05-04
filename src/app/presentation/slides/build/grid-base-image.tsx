import {
  Heading,
  Image,
  Slide,
} from 'spectacle'
import gridBase from 'assets/img/grid-base.gif'
import React from 'react'

const GridBaseImage = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>Et Voilà</Heading>
    <Image src={ gridBase } />
  </Slide>
))

export default GridBaseImage
