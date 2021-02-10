import * as actionTypes from '../actions/action-types';

const initialState = {
    global: {
        newConfirmed: 0,
        totalConfirmed: 0,
        newDeaths: 0,
        totalDeaths: 0,
        newRecovered: 0,
        totalRecovered: 0,
    },
    countries: [],
    date: '',
    selectedCountry: 'World',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COVID_STATS:
            return {
                ...state,
                global: { ...action.payload.global },
                countries: [...action.payload.countries],
                date: action.payload.date,
            };
        case actionTypes.SET_COVID_ACTIVE_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
