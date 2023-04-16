import { describe, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Form } from '.';
import { ErrorMessages } from './config';
import { store } from '../../app';

describe('Form', () => {
  it('it should display error messages when creating a card with incomplete form data', async () => {
    render(
      <Provider store={store}>
        <Form />{' '}
      </Provider>
    );
    const submitButton = screen.getByRole('button', { name: /create card/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(ErrorMessages.nameRequired)).toBeInTheDocument();
      expect(screen.getByText(ErrorMessages.birthdayRequired)).toBeInTheDocument();
      expect(screen.getByText(ErrorMessages.countryValidate)).toBeInTheDocument();
      expect(screen.getByText(ErrorMessages.genderRequired)).toBeInTheDocument();
      expect(screen.getByText(ErrorMessages.avatarRequired)).toBeInTheDocument();
      expect(screen.getByText(ErrorMessages.agreementRequired)).toBeInTheDocument();
    });
  });
});
