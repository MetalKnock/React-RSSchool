import { describe, expect } from 'vitest';
import { Card } from './';
import { characters } from '../../shared/api/mock';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  it('Card component is rendered and correct data is displayed', () => {
    const character = characters[0];
    render(<Card character={character} />);
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(character.status)).toBeInTheDocument();
    expect(screen.getByText(character.species)).toBeInTheDocument();
  });
});
