import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from "react";

const Clipboard = ({ text, children }) => {
    const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div
      className="group flex flex-col items-center space-y-4 md:hover:cursor-pointer"
      onClick={handleCopy}
    >
      {children}
      {!copied && (
        <span className="text-xs opacity-0 transition group-hover:opacity-100">
          click to copy!
        </span>
      )}
      <span
        className={classNames("text-xs transition-all", {
          block: copied,
          hidden: !copied,
        })}
      >
        copied!
      </span>
    </div>
  )
}

Clipboard.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default Clipboard
