import { FunctionComponent, useState, useRef, MouseEvent } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Box = styled.div`
  padding: 12px;
  color: white;
  border: 1px solid white;
  border-radius: 8px;
`

const MovingHighlight: FunctionComponent = () => {
  const [bgColor, setBgColor] = useState<string>('black')
  const [left, setLeft] = useState<number>(0)
  const [top, setTop] = useState<number>(0)

  const boxRef = useRef<HTMLInputElement>(null)

  const onMouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    const originalColor = 'black'
    const lightColor = 'rgb(0,163,255)'
    const gradientSize = 150

    setLeft(boxRef.current?.offsetLeft ?? 0)
    const x = e.pageX - left

    setTop(boxRef.current?.offsetTop ?? 0)
    const y = e.pageY - top

    const xy = x + ' ' + y

    setBgColor(
      '-webkit-gradient(radial, ' + xy + ', 0, ' + xy + ', ' + gradientSize + ', from(' + lightColor + '), to(rgba(255,255,255,0.0))), ' + originalColor
    )
  }

  const onMouseLeaveHandler = () => {
    setBgColor('black')
  }

  return (
    <Box style={{ background: bgColor }} ref={boxRef} onMouseMove={(e: MouseEvent<HTMLDivElement>) => onMouseMoveHandler(e)} onMouseLeave={onMouseLeaveHandler}>
      <FontAwesomeIcon icon={faReact} size="6x" />
      <h1>Moving highlight</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Box>
  )
}

export default MovingHighlight
