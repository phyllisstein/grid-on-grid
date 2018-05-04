import {
  Heading,
  Image,
  Slide,
} from 'spectacle'
import content from 'assets/img/content.png'
import React from 'react'

const ContentImage = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading fit>
      You did the thing!
    </Heading>
    <Image src={ content } />
  </Slide>
))

export default ContentImage
