import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

test('should render the component button', () => {
  const { container } = render(<Button>Enviar</Button>);
  expect(container).toBeInTheDocument();
});
