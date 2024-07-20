import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes from prop-types package

const ExtraOnHover = ({ icon, text }) => {
    return (
        <div className="absolute bottom-full -left-2 hidden w-[150px] items-center space-x-2 text-xs transition duration-300 ease-in-out md:group-hover:flex">
            {icon}
            <span>{text}</span>
        </div>
    )
}

ExtraOnHover.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string.isRequired
};

export default ExtraOnHover
