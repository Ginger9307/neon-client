import { default as Game } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Game', () => {

  test('it renders the title', () => {
    let initState = {}
    renderWithReduxProvider(<Game />, { initState })
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('GAME');
  });

});