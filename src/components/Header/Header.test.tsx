import { describe, expect } from 'vitest';
import { Header } from './';
import { fireEvent, render, screen } from '@testing-library/react';
import { WithLocation } from '../../hoc/WithLocation';
import { HeaderProps } from './Header';
import { PageTitles } from '../../shared/config/constants';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  const HeaderWithLocation = WithLocation<HeaderProps>(Header);

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/abc']}>
        <HeaderWithLocation />
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
