import React from 'react';
import './Button.css';

import P from 'prop-types';

import clsx from 'clsx';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
}) => {
  return (
    <button
      className={clsx('button', {
        '--primary': variant === 'primary',
        '--secondary': variant === 'secondary',
        '--outlined': variant === 'outlined',
        '--disabled': variant === 'disabled',
        '--sm': size === 'sm',
        '--md': size === 'md',
        '--lg': size === 'lg',
        '--xl': size === 'xl',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.string.isRequired,
  variant: P.oneOf(['primary', 'secondary', 'outlined', 'disabled']),
  size: P.oneOf(['sm', 'md', 'lg', 'xl']),
  onClick: P.func,
};
