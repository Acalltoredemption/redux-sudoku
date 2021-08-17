import React, { FC, Children } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import { GRID } from 'typings'
import { fillGrid } from 'utils'

const Grid: FC = () => {
  const grid: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  fillGrid(grid)
  console.log(grid)
  return (
    <Container data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container" key={rowIndex}>
          {[...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex} rowIndex={rowIndex} />
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Grid
