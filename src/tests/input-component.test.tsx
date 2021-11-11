/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from 'components/atoms/input';

describe('', () => {
  it('', () => {
    render(<Input value="test" isLoading={false} />);
    const weapper = screen.getByRole('listbox');
    expect(weapper.innerHTML).toContain('<span');
  });

  it('', () => {
    render(<Input value="" isLoading />);
    const weapper = screen.getByRole('listbox');
    expect(weapper.innerHTML).toContain('<div class="input__spin">');
  });
});
