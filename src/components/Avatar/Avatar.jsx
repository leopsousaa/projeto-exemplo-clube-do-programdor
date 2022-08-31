import React from 'react';
import './Avatar.css';

import P from 'prop-types';

import clsx from 'clsx';

export const Avatar = ({ src, alt, variant = 'primary' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx({
        '--primary': variant === 'primary',
        '--secondary': variant === 'secondary',
      })}
    />
  );
};

Avatar.propTypes = {
  src: P.string.isRequired,
  alt: P.string.isRequired,
  variant: P.oneOf(['primary', 'secondary']),
};
