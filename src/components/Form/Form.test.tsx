import { describe, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '.';
import { ErrorMessages } from './config';

describe('Form', () => {
  it('it should display error messages when creating a card with incomplete form data', () => {
    render(<Form addHuman={() => {}} />);
    const button = screen.getByText('Create card');
    fireEvent.click(button);

    expect(screen.getByText(ErrorMessages.name)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.birthday)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.country)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.gender)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.avatar)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.agreement)).toBeInTheDocument();
  });
});
