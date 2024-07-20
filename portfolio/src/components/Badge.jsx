import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';


const Badge = ({ children, className, icon, onClick }) => {
  return (
    <div
    onClick={onClick}
    className={classNames(
      "inline-flex items-center justify-center rounded-3xl bg-tuscan py-0.5 px-3 text-sm tracking-wider text-blue dark:bg-tuscan/50",
      {
        "space-x-2": icon,
        "border transition hover:cursor-pointer hover:border-tuscan hover:bg-blue hover:text-tuscan dark:border-none":
          onClick,
      },
      className
    )}
  >
    {icon}
    <div className={classNames({ "mt-0.5": icon })}>{children}</div>
  </div>
  )
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dark: PropTypes.bool,
    icon: PropTypes.node,
   onClick: PropTypes.func,
  };

export default Badge
