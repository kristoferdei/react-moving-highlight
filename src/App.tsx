import React from 'react'
import MovingHighlight from './components/MovingHighlight'
import styled from 'styled-components'

const AppContainer = styled.div`
  min-height: 100vh;
  background: black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 1.25rem;
  padding: 1.25rem;
`

const App = () => {
  return (
    <AppContainer>
      <MovingHighlight />
      <MovingHighlight />
      <MovingHighlight />
      <MovingHighlight />
    </AppContainer>
  )
}

export default App
