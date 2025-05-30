const CityList = ({ selectedCity, people, cities }) => {
  if (!selectedCity) {
    return (
      <div className="city-list">
        <h3>Select a city to see its residents</h3>
      </div>
    );
  }

  const city = cities.find(c => c.id === selectedCity);
  const cityResidents = people.filter(person => person.cityId === selectedCity);

  return (
    <div className="city-list">
      <h3>People living in {city.name}</h3>
      {cityResidents.length === 0 ? (
        <p>No residents found</p>
      ) : (
        <ul>
          {cityResidents.map(person => (
            <li key={person.id}>
              {person.name} - {person.age} years old
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityList;
