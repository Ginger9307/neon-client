import { default as Players } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Players', () => {

  test('it renders the title', () => {
    let initState = {}
    renderWithReduxProvider(<Players />, { initState })
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('WAITING ROOM');
  });

});