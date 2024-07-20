import React from 'react'
import PropTypes from 'prop-types';


const SplitText = ({text}) => {
  return (
    <div>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}}`}
          className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
SplitText.propTypes = {
  text: PropTypes.string.isRequired
};


export default SplitText
