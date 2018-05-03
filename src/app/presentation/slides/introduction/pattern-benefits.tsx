import {
  Appear,
  Slide,
  Text,
} from 'spectacle'
import React from 'react'

const PatternBenefits = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Appear>
      <Text>
        Consistency <em>over</em> Improvisation
      </Text>
    </Appear>
    <Appear>
      <Text>
        Harmony <em>over</em> Chaos
      </Text>
    </Appear>
    <Appear>
      <Text>
        Thought <em>over</em> Habit
      </Text>
    </Appear>
  </Slide>
))

export default PatternBenefits
