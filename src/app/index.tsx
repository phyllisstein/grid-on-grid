import Presentation from 'app/presentation'
import React from 'react'
import ReactDOM from 'react-dom'

const ROOT = document.getElementById('root')

const renderComponent = (Component: React.ComponentType) => {
  ReactDOM.render(
    <Component />,
    ROOT,
  )
}

renderComponent(Presentation)
