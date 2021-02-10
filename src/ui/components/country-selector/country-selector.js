import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './country-selector.scss';

const CountrySelector = ({ changed, countriesStats }) => {
    const selectRef = useRef(null);

    let countryList = [];

    if (countriesStats && countriesStats.length > 0) {
        countryList = countriesStats.map(country => (
            <option key={country.code} value={country.code}>
                {country.name}
            </option>
        ));
    }

    return (
        <div className='country-selector'>
            <span>Please select a country:</span>
            <select
                onChange={() => changed(selectRef.current.value)}
                ref={selectRef}
            >
                <option defaultValue='World'>World</option>
                {countryList}
            </select>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        countriesStats: state.covid.countries,
    };
};

CountrySelector.propTypes = {
    countriesStats: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            code: PropTypes.string,
            slug: PropTypes.string,
            date: PropTypes.string,
            stats: PropTypes.shape({
                newConfirmed: PropTypes.number,
                totalConfirmed: PropTypes.number,
                newDeaths: PropTypes.number,
                totalDeaths: PropTypes.number,
                newRecovered: PropTypes.number,
                totalRecovered: PropTypes.number,
            }),
        })
    ),
};

export default connect(mapStateToProps)(CountrySelector);
