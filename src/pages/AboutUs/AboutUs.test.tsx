import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutUs } from '.';

describe('About Us', () => {
  it('render', () => {
    render(<AboutUs />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
