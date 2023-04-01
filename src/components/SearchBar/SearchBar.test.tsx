import { describe, expect } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { SearchBar } from '.';
import { LocalStoragePath } from '../../shared/config/constants';
import { getLocalStorage } from '../../shared/lib/getLocalStorage';

describe('SearchBar', () => {
  it('should save search value to localStorage when unmounted', () => {
    beforeEach(() => {
      localStorage.clear();
    });
    render(<SearchBar />);

    const input = screen.getByTestId('search');
    fireEvent.change(input, { target: { value: 'test' } });

    cleanup();

    expect(getLocalStorage(LocalStoragePath.searchValue)).toEqual('test');
  });
});
