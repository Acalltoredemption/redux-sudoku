import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles, theme} from './styles';
import {ThemeProvider} from 'styled-components'
import {Content, Title, Card, Grid} from './components';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <GlobalStyles />
  <Content data-cy="content">
    <Title data-cy="title">Sudoku</Title>
    <Card data-cy="card">
      <Grid/>
    </Card>
  </Content>
  </ThemeProvider>,
  document.getElementById('root')
);


reportWebVitals();
