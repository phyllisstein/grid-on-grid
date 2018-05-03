import {
  Heading,
  Slide,
  Text,
} from 'spectacle'
import React from 'react'

const CSSGridDefinition = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading size={ 6 }>CSS Grid Module</Heading>
    <Text>
      An emerging CSS standard designed to facilitate
      the <em>two-dimensional</em> arrangement of content on a page.
    </Text>
  </Slide>
))

export default CSSGridDefinition
