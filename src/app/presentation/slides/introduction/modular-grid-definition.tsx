import {
  Heading,
  Slide,
  Text,
} from 'spectacle'
import React from 'react'

const ModularGridDefinition = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Heading size={ 6 }>Modular Grid System</Heading>
    <Text>
      A predefined pattern of rows and columns dividing a page into
      ordered and regular units.
    </Text>
  </Slide>
))

export default ModularGridDefinition
