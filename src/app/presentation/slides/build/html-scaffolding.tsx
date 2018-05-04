import CodeSlide from 'spectacle-code-slide'
import html from '!!raw-loader!assets/code/scaffolding.html'
import React from 'react'

const HTMLScaffolding = React.forwardRef((props: any, ref: any) => (
  <CodeSlide
    code={ html }
    lang='html'
    ranges={ [
      { loc: [0, 13], title: 'HTML Scaffolding' },
      { loc: [1, 3], note: 'Semantic HTML5 elements.' },
      { loc: [3, 5] },
      { loc: [5, 9], note: 'Expressively named classes.' },
      { loc: [9, 11] },
    ] }
    ref={ ref }
    { ...props } />
))

export default HTMLScaffolding
