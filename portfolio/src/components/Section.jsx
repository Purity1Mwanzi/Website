import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

const Section = ({ children, className, dark }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { display: 'none', translateY: 100 },
        {
          display: 'flex',
          translateY: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="absolute top-0 left-0 -z-30 h-screen w-screen overflow-hidden bg-blue transition-colors duration-500 ease-in-out dark:bg-black" />
      <div
        className={classNames(
          'flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl',
          className
        )}
      >
        <Navbar />
        <div ref={ref} className="hidden w-full flex-1 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool,
};

export default Section;
