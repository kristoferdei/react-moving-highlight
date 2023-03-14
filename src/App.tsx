import React from 'react'
import MovingHighlight from './components/MovingHighlight'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: black;
  height: 100vh;
  padding: 20px;
`

function App() {
  return (
    <StyledDiv>
      <MovingHighlight />
    </StyledDiv>
  )
}

export default App
