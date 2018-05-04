import {
  Appear,
  Code,
  Fill,
  Heading,
  Layout,
  Slide,
  Text,
} from 'spectacle'
import React from 'react'

const UnitAndRatio = React.forwardRef((props: any, ref: any) => (
  <Slide ref={ ref } { ...props }>
    <Layout>
      <Appear>
        <Fill>
          <Heading fit>
            Pick a unit.
          </Heading>
          <Text>
            <Code>1rem</Code> is a good start, but you can always choose a fixed
            value from your design—the width of an ad unit, say—to build around
            the requirements of the content.
          </Text>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <Heading fit>
            Pick a ratio.
          </Heading>
          <Text>
            Musical intervals, or the classic “orthogons,” can be used to build
            dynamic, harmonious units. We’ll use the golden ratio,
            { ' ' }
            <Code>1:1.618</Code>.
          </Text>
        </Fill>
      </Appear>
    </Layout>
    <Appear>
      <div>
        <Heading fit>
          Mash ’em together.
        </Heading>
      </div>
    </Appear>
  </Slide>
))

export default UnitAndRatio
