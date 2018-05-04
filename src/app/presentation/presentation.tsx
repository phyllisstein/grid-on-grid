import {
  Build,
  Design,
  Introduction,
} from './slides'
import createTheme from 'spectacle/lib/themes/default'
import { Deck } from 'spectacle'
import { hot } from 'react-hot-loader'
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
        <Design.Title />
        <Design.UnitAndRatio />
        <Design.GoldenSample />
        <Design.GoldenArrangedSample />
        <Design.TwelveColumns />
        <Build.PuttingItTogether />
        <Build.HTMLScaffolding />
        <Build.CSSScaffolding />
        <Build.GridBaseImage />
        <Build.HTMLContent />
        <Build.CSSContent />
        <Build.ContentImage />
      </Deck>
    )
  }
}

export default Presentation
