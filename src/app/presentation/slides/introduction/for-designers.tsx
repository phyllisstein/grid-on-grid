import {
  Heading,
  Slide,
  Text,
} from 'spectacle'
import React from 'react'

const ForDesigners = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading size={ 6 }>Designers</Heading>
    <Text>
      “A well-crafted grid harmoniously shapes the page, illuminates
      relationships between its constituent parts, and guides the
      attention of the reader as she moves her eye across the
      screen.”
    </Text>
  </Slide>
))

export default ForDesigners
