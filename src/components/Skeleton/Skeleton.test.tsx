import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '.';

describe('Skeleton', () => {
  it('render', () => {
    render(<Skeleton />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});
