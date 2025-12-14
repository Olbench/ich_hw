import "./CityCard.css";

function CityCard({ city }) {
  if (!city) {
    return <p style={{textAlign: 'center'}}>Выберите город</p>;
  }
  return (
    <div className="city_card_container">
      <h3>{city.name}</h3>
      <img style={{width: '300px'}} src={city.imageUrl} alt={city.name} />
      <p style={{textAlign: 'center'}}>{city.description}</p>
      <ul>
        {city.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
export default CityCard;
