import './CircularAvtar.css';

import React from 'react';

const CircularAvtar = ({ image, alt, name }) => {
    return (

        <div class="horizontalCenterAlign">
            <img src={image} alt width="60" height="60" />
        </div>

    );
};

export default CircularAvtar;