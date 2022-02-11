import { default as GameOver } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('GameOver', () => {

  test('it renders the title', () => {
    let initState = {}
    renderWithReduxProvider(<GameOver />, { initState })
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('RESULTS');
  });

});