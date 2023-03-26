import { describe, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { HumanList } from '..';
import { humans } from './mock-data';

describe('HumanList', () => {
  it('HumanList component renders a list of items with the correct number of elements based on the characters', () => {
    render(<HumanList humans={humans} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(humans.length);
  });
});
