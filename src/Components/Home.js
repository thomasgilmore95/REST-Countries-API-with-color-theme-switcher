import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import { CountriesContext } from '../Context/Context';
import Filter from './Filter';
import Title from './Title';

export default function Home() {
  const { countryList } = useContext(CountriesContext);
  
  return (
    <div>
      <Title />
      <Filter />
      <div className='flex flex-wrap justify-center gap-12'>
        {countryList.length > 0 ? countryList.map((country) => {
          return (<CountryCard key={country.name} img={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} />)
        }) : null }
      </div>
    </div>
  )
}
