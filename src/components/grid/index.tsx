import React, { FC, Children, useEffect, useCallback } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import { useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { createGrid } from 'reducers'
import { INDEX } from 'typings'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  return (
    <Container data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container" key={rowIndex}>
          {[...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Grid
