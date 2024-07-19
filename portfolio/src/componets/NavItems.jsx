import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames'; // Ensure classNames is imported correctly
import ExtraOnHover from './ExtraOnHover';

const NavItems = ({ isActive, icon, extra, url, isMobileOnly, label }) => {
  return (
    <Link
      aria-label={`Go to ${label} page`}
      to={url}
      className={classNames(
        "group relative flex flex-col items-center justify-center text-base before:absolute before:bottom-1 before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:bg-pink/40 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 md:text-lg",
        {
          "text-red": isActive,
          "flex md:hidden": isMobileOnly,
        }
      )}
    >
      {isActive && (
        <img
          src="/icons/half.svg"
          alt="active"
          width={18}
          height={18}
          className="absolute left-1/2 top-5 -translate-x-1/2 rotate-180 xs:top-11 md:top-2.5 md:-left-4 md:rotate-0"
        />
      )}

      <div className="mb-1 block md:mb-0 md:hidden">{icon}</div>
      <div className="hidden xs:block">{label}</div>
      <ExtraOnHover icon={icon} text={extra} />
    </Link>
  );
};

NavItems.propTypes = {
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.node,
  extra: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isMobileOnly: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default NavItems;
