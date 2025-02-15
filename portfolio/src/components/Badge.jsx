import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ children, className, icon, onClick }) => {
  // Use a button element if clickable for better accessibility
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      // Only add a type if it's a button
      type={onClick ? 'button' : undefined}
      className={classNames(
        // Base styles
        'inline-flex items-center justify-center rounded-full py-0.5 px-3 text-sm font-medium tracking-wide',
        'bg-tuscan text-blue dark:bg-tuscan/50',
        // Add spacing between icon and text if icon is present
        { 'space-x-2': icon },
        // Interactive styles for clickable badges
        onClick &&
          'cursor-pointer border border-transparent transition-colors duration-200 hover:border-tuscan hover:bg-blue hover:text-tuscan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tuscan',
        // Custom classes passed as prop
        className
      )}
    >
      {icon}
      <span className={classNames({ 'mt-0.5': icon })}>{children}</span>
    </Component>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Badge;
