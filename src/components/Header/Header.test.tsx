import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '.';

import { PageTitles } from '../../shared/config/constants';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/abc']}>
        <Header />
      </MemoryRouter>
    );
  });

  it('it should render the Header component with the correct location when given a specific route using WithLocation HOC', () => {
    const headerLocation = screen.getByRole('heading', { level: 4 });

    expect(headerLocation.textContent).toMatch(PageTitles.notFound);
  });

  it('it should update the Header location correctly when clicking the About Us link on Header component with WithLocation HOC', () => {
    const headerLocation = screen.getByRole('heading', { level: 4 });
    const aboutUs = screen.getByTestId('aboutUsLink');

    fireEvent.click(aboutUs);

    expect(headerLocation.textContent).toMatch(PageTitles.aboutUs);
  });

  it('it should update the Header location correctly when clicking the Main link on Header component with WithLocation HOC', () => {
    const headerLocation = screen.getByRole('heading', { level: 4 });
    const main = screen.getByTestId('mainLink');

    fireEvent.click(main);

    expect(headerLocation.textContent).toMatch(PageTitles.main);
  });
});
