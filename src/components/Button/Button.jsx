import React, { forwardRef, useRef } from 'react';
import P from 'prop-types';

import './Button.css';

import clsx from 'clsx';

export const Button = forwardRef(
  ({ children, variant = 'primary', size = 'md', onClick }, ref) => {
    const forwardedRef = useRef(ref);

    return (
      <button
        ref={forwardedRef}
        className={clsx('button', {
          '--primary': variant === 'primary',
          '--secondary': variant === 'secondary',
          '--outlined': variant === 'outlined',
          '--danger': variant === 'danger',
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
  },
);

Button.propTypes = {
  children: P.string.isRequired,
  variant: P.oneOf(['primary', 'secondary', 'outlined', 'disabled', 'danger']),
  size: P.oneOf(['sm', 'md', 'lg', 'xl']),
  onClick: P.func,
  ref: P.string,
};
