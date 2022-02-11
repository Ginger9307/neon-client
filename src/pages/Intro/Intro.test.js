import { default as Intro } from '.';
import { render, screen } from '@testing-library/react';

describe('Intro', () => {

  test('it renders the title', () => {
    render(<Intro />)
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toContain('WELCOME TO THE QUIZ');
  });

});