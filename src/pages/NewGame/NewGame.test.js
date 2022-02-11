import { default as NewGame } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('NewGame', () => {

  test('it renders the title', () => {
    let initState = {}
    renderWithReduxProvider(<NewGame />, { initState })
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('NEW GAME');
  });

});