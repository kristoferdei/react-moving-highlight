import { useState, useRef, MouseEvent } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Box = styled.div`
  color: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 0.5rem;
  padding: 0.75rem;
  cursor: default;
  max-height: 18rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  opacity: 0.7;
`

const StyledText = styled.p`
  opacity: 0.7;
`

const MovingHighlight = () => {
  const [bgColor, setBgColor] = useState<string>('rgb(0, 0, 0)')
  const [left, setLeft] = useState<number>(0)
  const [top, setTop] = useState<number>(0)

  const boxRef = useRef<HTMLInputElement>(null)

  const onMouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    const originalColor = 'rgb(0, 0, 0)'
    const gradientColor = 'rgb(0,163,255)'
    const gradientSize = 150

    setLeft(boxRef.current?.offsetLeft ?? 0)
    const x = e.pageX - left

    setTop(boxRef.current?.offsetTop ?? 0)
    const y = e.pageY - top

    const xy = x + ' ' + y

    setBgColor(
      '-webkit-gradient(radial, ' + xy + ', 0, ' + xy + ', ' + gradientSize + ', from(' + gradientColor + '), to(rgba(255,255,255,0.0))), ' + originalColor
    )
  }

  const onMouseLeaveHandler = () => {
    setBgColor('black')
  }

  return (
    <Box style={{ background: bgColor }} ref={boxRef} onMouseMove={(e: MouseEvent<HTMLDivElement>) => onMouseMoveHandler(e)} onMouseLeave={onMouseLeaveHandler}>
      <StyledIcon icon={faReact} size="5x" />
      <h3>Moving highlight</h3>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </StyledText>
    </Box>
  )
}

export default MovingHighlight
