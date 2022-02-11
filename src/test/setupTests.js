// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import gameReducer from '../reducers/gameReducer';

const TestProviders = ({ initState }) => {
  initState ||= { room: "", amount: "", category: "", difficulty: "", player: "", numQ: 0, index: 0, questions: [], score: 0,  finishQuiz: false, loading: false, admin: false, playerScores: [] };
  let testReducer = () => gameReducer(initState, { type: '@@INIT' })
  const testStore = createStore(testReducer)

  return ({ children }) => (
      <Provider store={testStore}>
          { children }
      </Provider>
  )
}

const renderWithReduxProvider = (ui, options={}) => {
  let TestWrapper = TestProviders(options)
  render(ui, { wrapper: TestWrapper, ...options })
}

global.React = React;
module.exports = renderWithReduxProvider
