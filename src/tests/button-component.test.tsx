import React from 'react';
import { render } from '@testing-library/react';
import ButtonComponent from 'components/atoms/button';

describe('', () => {
  it('', () => {
    render(<ButtonComponent />);

    const result = render(<ButtonComponent />);
    const button = result.container.querySelector('#button');
    if (button) {
      expect(button.innerHTML).toEqual('Delete');
      expect(button).toBeInTheDocument();
    }
  });
});
