import {
  Deck,
  Slide,
  Text,
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import { hot } from 'react-hot-loader'
import React from 'react'

const theme = createTheme({
  primary: 'hsl(230, 1%, 98%)',
  quartenary: '#df5b66',
  secondary: '#282a2e',
  tertiary: '#b294bb',
}, {
  primary: 'Nort',
  secondary: 'Charlie',
  tertiary: 'Source Code Pro',
})

/**
 * Main Spectacle presentation.
 */
@hot(module)
class Presentation extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <Deck theme={ theme }>
        <Slide>
          <Text>Hello, world!</Text>
        </Slide>
      </Deck>
    )
  }
}

export default Presentation
