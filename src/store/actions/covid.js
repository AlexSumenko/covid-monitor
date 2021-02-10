import * as actionTypes from './action-types';
import { httpAddressRequest } from '../../utils/fetch';

export const setCovidActiveCountry = countryCode => {
    return {
        type: actionTypes.SET_COVID_ACTIVE_COUNTRY,
        payload: countryCode,
    };
};

const saveCovidStats = covidData => {
    return {
        type: actionTypes.GET_COVID_STATS,
        payload: covidData,
    };
};

export const getCovidStats = () => {
    return dispatch => {
        httpAddressRequest('GET', 'summary')
            .then(res => {
                const stats = {
                    global: {
                        newConfirmed: res.Global.NewConfirmed,
                        totalConfirmed: res.Global.TotalConfirmed,
                        newDeaths: res.Global.NewDeaths,
                        totalDeaths: res.Global.TotalDeaths,
                        newRecovered: res.Global.NewRecovered,
                        totalRecovered: res.Global.TotalRecovered,
                    },
                    countries: res.Countries.map(country => {
                        const newCountry = {
                            name: country.Country,
                            code: country.CountryCode,
                            slug: country.Slug,
                            stats: {
                                newConfirmed: country.NewConfirmed,
                                totalConfirmed: country.TotalConfirmed,
                                newDeaths: country.NewDeaths,
                                totalDeaths: country.TotalDeaths,
                                newRecovered: country.NewRecovered,
                                totalRecovered: country.TotalRecovered,
                            },
                            date: country.Date,
                        };
                        return newCountry;
                    }),
                    date: res.Date,
                };
                dispatch(saveCovidStats(stats));
            })
            .catch(err => console.log(err));
    };
};
