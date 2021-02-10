import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actions/index';

import CardGroup from '../card-group/card-group';
import CountrySelector from '../../components/country-selector/country-selector';

import './dashboard.scss';

const Dashboard = ({ getCovidData, setActiveCountry, selectedCountry }) => {
    useEffect(() => {
        getCovidData();
    }, [getCovidData]);

    const onCountrySelection = countryCode => {
        setActiveCountry(countryCode);
    };

    return (
        <>
            <h1 className='header'>Covid Dashboard</h1>
            <main>
                <CountrySelector changed={onCountrySelection.bind(this)} />
                <CardGroup />
            </main>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        getCovidData: () => dispatch(actions.getCovidStats()),
        setActiveCountry: countryCode =>
            dispatch(actions.setCovidActiveCountry(countryCode)),
    };
};

Dashboard.propTypes = {
    getCovidData: PropTypes.func,
    setActiveCountry: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Dashboard);
