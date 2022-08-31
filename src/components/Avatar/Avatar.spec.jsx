import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

test('should render the component avatar', () => {
  const { container } = render(
    <Avatar
      src="https://www.ifnmg.edu.br/arquivos/2016/reitoria/Not%C3%ADcias/ifnmg_vertical_jpg.jpg"
      alt="Logo do IFNMG"
    />,
  );
  expect(container).toBeInTheDocument();
});
