import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectActiveCountryStats } from '../../../store/selectors/covid';

import Card from '../../components/card/card';
import './card-group.scss';

const CardGroup = ({ selectedCountryStats }) => {
    return (
        <div className='card-group'>
            <h3 className='card-group__header'>{`${
                selectedCountryStats.name || 'World'
            } Statistics`}</h3>
            <div className='card-group__container'>
                <Card
                    type='Cases'
                    newCases={selectedCountryStats.stats?.newConfirmed}
                    totalCases={selectedCountryStats.stats?.totalConfirmed}
                />
                <Card
                    type='Deaths'
                    newCases={selectedCountryStats.stats?.newDeaths}
                    totalCases={selectedCountryStats.stats?.totalDeaths}
                />
                <Card
                    type='Recoveries'
                    newCases={selectedCountryStats.stats?.newRecovered}
                    totalCases={selectedCountryStats.stats?.totalRecovered}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        selectedCountryStats: selectActiveCountryStats(state.covid),
    };
};

CardGroup.propTypes = {
    selectedCountryStats: PropTypes.shape({
        newConfirmed: PropTypes.number,
        totalConfirmed: PropTypes.number,
        newDeaths: PropTypes.number,
        totalDeaths: PropTypes.number,
        newRecovered: PropTypes.number,
        totalRecovered: PropTypes.number,
        name: PropTypes.string,
        code: PropTypes.string,
    }),
};

export default connect(mapStateToProps)(CardGroup);
