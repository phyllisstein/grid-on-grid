import CodeSlide from 'spectacle-code-slide'
import html from '!!raw-loader!assets/code/content.html'
import React from 'react'

const HTMLContent = React.forwardRef((props: any, ref: any) => (
  <CodeSlide
    code={ html }
    lang='html'
    ranges={ [
      { loc: [0, 39], title: 'HTML + Content' },
      { loc: [1, 38], note: 'Grid items must be nested directly under grid containers.' },
      { loc: [1, 2] },
      { loc: [2, 7] },
      { loc: [7, 31] },
      { loc: [31, 37] },
    ] }
    ref={ ref }
    { ...props } />
))

export default HTMLContent
