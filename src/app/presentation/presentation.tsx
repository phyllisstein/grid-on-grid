import createTheme from 'spectacle/lib/themes/default'
import { Deck } from 'spectacle'
import { hot } from 'react-hot-loader'
import { Introduction } from './slides'
import React from 'react'

const theme = createTheme({
  primary: 'hsl(230, 1%, 98%)',
  quartenary: '#cc6666',
  secondary: '#282a2e',
  tertiary: '#b294bb',
}, {
  primary: 'Nort',
  tertiary: 'Source Code Pro',
})

/**
 * Main Spectacle presentation.
 */
@hot(module)
class Presentation extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <Deck
        progress='bar'
        theme={ theme }
        transition={ ['fade', 'zoom'] }
        transitionDuration={ 450 }>
        <Introduction.Title />
        <Introduction.OMGWTFBBQ />
        <Introduction.ModularGridDefinition />
        <Introduction.CSSGridDefinition />
        <Introduction.JustGoWithIt />
        <Introduction.GridIsGood />
        <Introduction.ForMe />
        <Introduction.ForDesigners />
        <Introduction.ForDevelopers />
        <Introduction.PatternAndPrinciple />
        <Introduction.PatternBenefits />
      </Deck>
    )
  }
}

export default Presentation
