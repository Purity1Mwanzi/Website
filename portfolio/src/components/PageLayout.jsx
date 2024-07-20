import React from 'react'
import PropTypes from 'prop-types';

const PageLayout = ({ children }) => {
  return (
    <main
      className="min-h-screen w-full overflow-hidden bg-cover bg-no-repeat font-serif text-sm text dark:text-blue xs:text-lg"
      style={{
        backgroundImage: " url('/icons/bg.svg')",
      }}
    >
      {children}
    </main>
  )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PageLayout
