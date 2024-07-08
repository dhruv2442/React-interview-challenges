import { useState } from 'react';
import './DependentDropdown.css';
import { countries } from './countries.js';

const DependentDropdown = ({ project, setProject }) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className='DependentDropdownWrapper'>
      <h1
        className='DependentDropDownTitle'
        onClick={() => setProject('Dependent Dropdowns')}
      >
        <span>Dependent Dropdown</span>
        <span>
          {project == 'Dependent Dropdowns' ? (
            <i className='fa-solid fa-chevron-up'></i>
          ) : (
            <i className='fa-solid fa-chevron-down'></i>
          )}
        </span>
      </h1>
      <hr className='horizontalLine' />
      {project == 'Dependent Dropdowns' && (
        <div className='DropDowns'>
          <fieldset className='select'>
            <legend>Country</legend>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value=''>Select country</option>
              {countries.map((country) => {
                return (
                  <option value={country.value} key={country.value}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </fieldset>
          {country != '' && (
            <fieldset className='select'>
              <legend>City</legend>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value=''>Select city</option>
                {countries
                  .find((cntry) => cntry.value == country)
                  .cities.map((ct) => {
                    return (
                      <option value={ct} key={ct}>
                        {ct}
                      </option>
                    );
                  })}
              </select>
            </fieldset>
          )}
        </div>
      )}
    </div>
  );
};

export default DependentDropdown;
