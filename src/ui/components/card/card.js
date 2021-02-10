import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

const Card = ({ type, newCases, totalCases }) => {
    return (
        <div className='covid-card'>
            <h4>{type}</h4>
            <p>{`New: ${newCases}`}</p>
            <p>{`Total: ${totalCases}`}</p>
        </div>
    );
};

Card.propTypes = {
    type: PropTypes.string,
    newCases: PropTypes.number,
    totalCases: PropTypes.number,
};

Card.defaultProps = {
    type: 'Cases',
    newCases: 0,
    totalCases: 0,
};

export default Card;
