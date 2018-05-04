import 'prismjs/components/prism-css'
import 'prismjs/components/prism-css-extras'
import CodeSlide from 'spectacle-code-slide'
import css from '!!raw-loader!assets/code/scaffolding.css'
import React from 'react'

const CSSScaffolding = React.forwardRef((props: any, ref: any) => (
  <CodeSlide
    code={ css }
    lang='css'
    ranges={ [
      { loc: [0, 23], title: 'Base Styles' },
      { loc: [2, 3], note: 'Remember our grid units?' },
      { loc: [7, 8] },
      { loc: [11, 12], note: 'Specify starting and ending “lines.”' },
      { loc: [15, 16] },
      { loc: [19, 20], note: 'Grid can often compute these automatically.' },
      { loc: [3, 4], note: 'Let Grid add rows to fit content for the time being.' },
    ] }
    ref={ ref }
    { ...props } />
))

export default CSSScaffolding
