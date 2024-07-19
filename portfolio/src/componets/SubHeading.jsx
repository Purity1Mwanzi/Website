import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Align } from '../constants';

const SubHeading = ({ dark = false, children, align, className }) => {
  return (
    <h2
      className={classNames(
        "w-full text-xs font-extralight uppercase tracking-widest",
        {
          "dark:text-blue": dark,
          "text-pink": !dark,
          "text-center": !align,
          "text-left": align === Align.Left,
          "text-right": align === Align.Right,
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

SubHeading.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired,
  align: PropTypes.oneOf([Align.Left,  Align.Right]),
  className: PropTypes.string
};

export default SubHeading;
