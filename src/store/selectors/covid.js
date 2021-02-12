export const selectActiveCountryStats = store =>
    store.selectedCountry === 'World'
        ? { name: 'World', code: 'World', stats: store.global }
        : store.countries?.find(
              country => country.code === store.selectedCountry
          );

export const selectUpdatedDate = store => new Date(store.date);

export const selectCountries = store => store.countries;
