import React from 'react'
import PropTypes from 'prop-types';


const Home = ({icon,bottom,top,left,right,width,lag,rotate,opacity}) => {
    
        {
          icon: <FullFilled color={Colors.Pink} />,
          bottom; 10,
          right; 18,
          width; 14,
          lag; 2,
          rotate; -32,


        {
          icon: <FullOutline color={Colors.Pink} />,
          bottom: 10,
          right: 14,
          width: 14,
          lag: 4,
          rotate: -32,
        },
        {
          icon: <QuarterFilled color={Colors.Orange} />,
          top: 25,
          right: 14,
          width: 12,
          lag: 1,
          rotate: -132,
        },
        {
          icon: <HalfOutline color={Colors.Orange} />,
          top: 25,
          right: 16,
          width: 12,
          lag: 1,
          rotate: -70,
        },
        {
          icon: <HalfFilledV2 color={Colors.Teal} />,
          bottom: 20,
          left: 2,
          width: 10,
          lag: 1,
          rotate: 40,
        },
        {
          icon: <HalfOutline color={Colors.Teal} />,
          bottom: 20,
          left: 4,
          width: 12,
          lag: 1,
          rotate: 40,
          opacity: 0.6,
        },
        {
          icon: <ArcOutline color={Colors.Red} />,
          top: 20,
          left: 14,
          width: 14,
          lag: 3,
          rotate: 10,
          opacity: 0.6,
        },
        {
          icon: <FullOutline color={Colors.Red} />,
          top: 50,
          left: 40,
          width: 18,
          lag: 3,
          rotate: 10,
          opacity: 0.6,
        },
      
}
Home.propTypes = {
    icon: PropTypes.node.isRequired, // React.ReactNode is PropTypes.node
    bottom: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.number.isRequired,
    lag: PropTypes.number.isRequired,
    rotate: PropTypes.number,
    opacity: PropTypes.number,
  };
  
export default Home
