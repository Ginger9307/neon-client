import { default as About } from '.';
import { render, screen } from '@testing-library/react';

describe('About', () => {

  test('it renders the title', () => {
    render(<About />)
    const titleValue = screen.getByText('ABOUT');
    expect(titleValue).toHaveTextContent('ABOUT');
  });

});