import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from '.';

describe('NotFound', () => {
  it('should render the NotFound page', () => {
    render(<NotFound />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
