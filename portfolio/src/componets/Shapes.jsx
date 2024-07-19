// HalfFilledV1.js
import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../constants';

function HalfFilledV1({ colorKey }) {
  const selectedColor = color[0][colorKey];

  return (
    <svg
      width="100%"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="100" fill={selectedColor} />
    </svg>
  );
}

HalfFilledV1.propTypes = {
  colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
};



function HalfFilledV2({ colorKey }) {
    const selectedColor = color[0][colorKey];

    return (
      <svg
        width="100%"
        viewBox="0 0 166 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M165.992 3.30909C165.992 13.5522 166.366 20.3859 162.13 29.8493C157.895 39.3127 151.688 47.9114 143.862 55.1543C136.037 62.3973 133 65.7454 116.522 72.0626C106.298 75.9825 105.5 78 84.2726 78C73.2058 78 67.7244 75.9825 57.5 72.0626C47.2756 68.1427 32.5083 62.3973 24.6829 55.1543C16.8574 47.9114 10.65 39.3127 6.41487 29.8493C2.17978 20.3859 -9.67494e-07 10.2431 0 0L40.5 3.30909H81.7189L125.5 4.5L165.992 3.30909Z"
          fill={color}
        />
      </svg>
    );
  }

  HalfFilledV2.propTypes = {
    colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
  };



  function QuarterFilled({ colorKey }) {
    const selectedColor = color[0][colorKey];

    return (
      <svg
        width="100%"
        viewBox="0 0 128 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.437924 46.9982C6.08165 59.4725 15.4738 63.1904 25.4617 72.5554C35.4495 81.9204 47.6503 90.1823 60.4617 95.0123C73.2731 99.8422 82.4571 103.211 96.1417 102.771C109.826 102.331 114.79 95.1991 127.264 89.5554L83.9617 0.0554054L0.437924 46.9982Z"
          fill={color}
        />
      </svg>
    );
  }

  QuarterFilled.propTypes = {
    colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
  };

  function FullFilled({ colorKey }) {
    const selectedColor = color[0][colorKey];

    return (
      <svg
        width="100%"
        viewBox="0 0 136 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M136 65C136 102.555 97.0554 134.5 59.5 134.5C21.9446 134.5 0 102.555 0 65C0 27.4446 39.4446 0 77 0C114.555 0 136 27.4446 136 65Z"
          fill={color}
        />
      </svg>
    );
  }

  FullFilled.propTypes = {
    colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
  };

  function HalfOutline({ colorKey}) {
    const selectedColor = color[0][colorKey];
    
    return (
      <svg
        width="100%"
        viewBox="0 0 121 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_237_291" fill="white">
          <path d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z" />
        </mask>
        <path
          d="M121 0.5C121 8.44497 119.435 16.3121 116.395 23.6523C113.354 30.9925 108.898 37.662 103.28 43.28C97.662 48.8979 90.9925 53.3543 83.6523 56.3947C76.3121 59.4351 68.445 61 60.5 61C52.555 61 44.6878 59.4351 37.3476 56.3947C30.0075 53.3543 23.338 48.8979 17.72 43.28C12.1021 37.662 7.6457 30.9925 4.60529 23.6523C1.56488 16.3121 -6.94571e-07 8.44497 0 0.499995L60.5 0.5H121Z"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="2 2"
          mask="url(#path-1-inside-1_237_291)"
        />
      </svg>
    );
  }
  HalfOutline.propTypes = {
    colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
  };
  
  function FullOutline({ colorKey}) {
    const selectedColor = color[0][colorKey];

    return (
      <svg
        width="100%"
        viewBox="0 0 248 248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="124"
          cy="124"
          r="123.5"
          stroke={color}
          strokeDasharray="2 2"
        />
      </svg>
    );
  }

 FullOutline.propTypes = {
    colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
  };
  
  
  function ArcOutline({ colorKey }) {
    const selectedColor = color[0][colorKey];

    return (
      <svg
        width="100%"
        viewBox="0 0 128 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_237_213" fill="white">
          <path d="M128 0C128 8.4046 126.345 16.7269 123.128 24.4917C119.912 32.2566 115.198 39.3119 109.255 45.2548C103.312 51.1978 96.2566 55.912 88.4917 59.1283C80.7269 62.3446 72.4046 64 64 64C55.5954 64 47.2731 62.3446 39.5083 59.1283C31.7434 55.912 24.6881 51.1978 18.7452 45.2548C12.8022 39.3119 8.08801 32.2566 4.87171 24.4917C1.65541 16.7269 -7.34753e-07 8.40459 0 -5.59506e-06L20.1156 -3.8365e-06C20.1156 5.76298 21.2507 11.4695 23.4561 16.7938C25.6615 22.1181 28.894 26.9559 32.969 31.031C37.0441 35.106 41.8819 38.3385 47.2062 40.5439C52.5305 42.7493 58.237 43.8844 64 43.8844C69.763 43.8844 75.4695 42.7493 80.7938 40.5439C86.1181 38.3385 90.9559 35.106 95.031 31.031C99.106 26.9559 102.339 22.1181 104.544 16.7938C106.749 11.4695 107.884 5.76298 107.884 0H128Z" />
        </mask>
        <path
          d="M128 0C128 8.4046 126.345 16.7269 123.128 24.4917C119.912 32.2566 115.198 39.3119 109.255 45.2548C103.312 51.1978 96.2566 55.912 88.4917 59.1283C80.7269 62.3446 72.4046 64 64 64C55.5954 64 47.2731 62.3446 39.5083 59.1283C31.7434 55.912 24.6881 51.1978 18.7452 45.2548C12.8022 39.3119 8.08801 32.2566 4.87171 24.4917C1.65541 16.7269 -7.34753e-07 8.40459 0 -5.59506e-06L20.1156 -3.8365e-06C20.1156 5.76298 21.2507 11.4695 23.4561 16.7938C25.6615 22.1181 28.894 26.9559 32.969 31.031C37.0441 35.106 41.8819 38.3385 47.2062 40.5439C52.5305 42.7493 58.237 43.8844 64 43.8844C69.763 43.8844 75.4695 42.7493 80.7938 40.5439C86.1181 38.3385 90.9559 35.106 95.031 31.031C99.106 26.9559 102.339 22.1181 104.544 16.7938C106.749 11.4695 107.884 5.76298 107.884 0H128Z"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="6 6"
          mask="url(#path-1-inside-1_237_213)"
        />
      </svg>
    );
  }

  ArcOutline.propTypes = {
    colorKey: PropTypes.oneOf(['Red', 'Pink', 'Purple', 'Orange', 'Teal', 'Beige']).isRequired,
  };

  export {
    HalfFilledV1,
    HalfFilledV2,
    HalfOutline,
    FullFilled,
    FullOutline,
    ArcOutline,
    QuarterFilled,
  };
  
