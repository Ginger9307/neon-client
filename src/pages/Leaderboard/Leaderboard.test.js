import { default as Leaderboard } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Leaderboard', () => {

  test('it renders the title', () => {
    let initState = {}
    renderWithReduxProvider(<Leaderboard />, { initState })
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('LEADERBOARD');
  });

});