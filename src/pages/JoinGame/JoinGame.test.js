import { default as JoinGame } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('JoinGame', () => {

  test('it renders the title', () => {
    let initState = {}
    renderWithReduxProvider(<JoinGame />, { initState })
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('JOIN GAME');
  });

});