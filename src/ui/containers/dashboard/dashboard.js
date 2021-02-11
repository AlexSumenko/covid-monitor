import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actions/index';

import CardGroup from '../../components/card-group/card-group';
import CountrySelector from '../../components/country-selector/country-selector';

import './dashboard.scss';

const Dashboard = ({ clearStore, getCovidData, setActiveCountry }) => {
    useEffect(() => {
        getCovidData();
        return () => {
            clearStore();
        };
    }, [clearStore, getCovidData]);

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
        clearStore: () => dispatch(actions.clearCovidStats()),
    };
};

Dashboard.propTypes = {
    getCovidData: PropTypes.func,
    setActiveCountry: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Dashboard);
