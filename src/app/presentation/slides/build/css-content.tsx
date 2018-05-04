import 'prismjs/components/prism-css'
import 'prismjs/components/prism-css-extras'
import CodeSlide from 'spectacle-code-slide'
import css from '!!raw-loader!assets/code/content.css'
import React from 'react'

const CSSContent = React.forwardRef((props: any, ref: any) => (
  <CodeSlide
    code={ css }
    lang='css'
    ranges={ [
      { loc: [0, 32], title: 'Content Styles' },
      { loc: [0, 5] },
      { loc: [7, 8], note: 'Grid lines can be negative (from the bottom/right).' },
      { loc: [11, 12] },
      { loc: [15, 16] },
      { loc: [18, 25], note: 'Grid items can be flex containers.' },
    ] }
    ref={ ref }
    { ...props } />
))

export default CSSContent
