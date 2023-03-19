import { describe, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { CardList } from '.';
import { characters } from '../../shared/api/mock';

describe('CardList', () => {
  it('CardList component renders a list of items with the correct number of elements based on the characters', () => {
    render(<CardList />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(characters.length);
  });
});
