import { Provider } from 'react-redux';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '.';
import { setupStore } from '../../shared/store/store';

describe('Search bar', () => {
  it('render', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
