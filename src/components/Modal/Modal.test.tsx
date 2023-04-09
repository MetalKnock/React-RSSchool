import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { characters } from '../../shared/api/mock';

const character = characters[0];

describe('Modal component', () => {
  it('renders the character information', () => {
    render(<Modal character={character} closeModal={() => {}} />);
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(
      screen.getByText(
        new Date(character.created).toLocaleDateString('en-EN', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        })
      )
    ).toBeInTheDocument();
    expect(screen.getByText(character.episode.length)).toBeInTheDocument();
    expect(screen.getByText(character.gender)).toBeInTheDocument();
    expect(screen.getByText(character.location.name)).toBeInTheDocument();
    expect(screen.getByText(character.id)).toBeInTheDocument();
    expect(screen.getByText(character.status)).toBeInTheDocument();
    expect(screen.getByText(character.species)).toBeInTheDocument();
  });

  it('calls the closeModal function when the close button is clicked', () => {
    const closeModal = vi.fn();
    render(<Modal character={character} closeModal={closeModal} />);
    const closeButton = screen.getByTestId('closeModal');
    fireEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
