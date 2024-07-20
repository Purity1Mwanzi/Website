import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Define allowed values for size as constants
const SIZE_XS = 'xs';
const SIZE_SM = 'sm';

const Heading = ({ dark, children, size, className }) => {
  return (
    <h2
      className={classNames(
        "whitespace-pre-line",
        {
          "text-tuscan": dark,
          "text-pink": !dark,
          "text-5xl sm:text-7xl md:text-8xl": size === "xs",
          "text-md xs:text-2xl md:text-6xl": size === "sm",
        },
        className
      )}
    >
      {children}
    </h2>
  )
}
Heading.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([SIZE_XS, SIZE_SM]).isRequired,
  className: PropTypes.string
}



export default Heading
