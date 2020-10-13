import './ClassNameBox.css';

import React from 'react';
import classNames from 'classnames';


const classNames2 = (...props) => {
    return classNames(props);
};
// let classes = classNames2('Buttons', { 'Bordered': bordered });

export default classNames2;