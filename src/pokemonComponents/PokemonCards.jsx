
export default function PokemonCards({ pokeData, filteredData }) {
    return (
      <div className="poke-card-container">
        {pokeData.length === 0 && <p>Loading Pokémon...</p>}
  
        {filteredData.map((eachData) => (
          <div className="card-body" key={eachData.id}>
            <div className="poke-img-div">
              {eachData.sprites?.other?.dream_world?.front_default ? (
                <img
                  src={eachData.sprites.other.dream_world.front_default}
                  alt={eachData.name}
                  className="poke-img"
                />
              ) : (
                <p>Loading image...</p>
              )}
              <div className="back-ground"></div>
            </div>
  
            <div className="poke-details">
              <div className="poke-name color-red">
                <h2 className="capitalize m0-p0 poke-name-h2">
                  {eachData.name}
                </h2>
              </div>
  
              <button className="poke-type">
                <ul className="m0-p0 ul-display">
                  {eachData.types?.map((type) => (
                    <li key={type.slot} className="li-style-none capitalize">
                      {type.type.name}
                    </li>
                  ))}
                </ul>
              </button>
  
              <div className="poke-info">
                <div className="poke-height flex-column">
                  <strong className="capitalize m0-p0">
                    {eachData.height}
                  </strong>
                  <span className="bold-shadow">Height</span>
                </div>
  
                <div className="poke-weight flex-column m0-p0">
                  <strong className="capitalize m0-p0">
                    {eachData.weight}
                  </strong>
                  <span className="bold-shadow">Weight</span>
                </div>
  
                <div className="poke-hp flex-column">
                  <strong className="capitalize m0-p0">
                    {eachData.stats[0]?.base_stat}
                  </strong>
                  <span className="bold-shadow">HP</span>
                </div>
  
                <div className="poke-defence flex-column m0-p0">
                  <strong className="capitalize m0-p0">
                    {eachData.stats[2]?.base_stat}
                  </strong>
                  <span className="bold-shadow">Defence</span>
                </div>
  
                <div className="poke-attack flex-column">
                  <strong className="capitalize m0-p0">
                    {eachData.stats[1]?.base_stat}
                  </strong>
                  <span className="bold-shadow">Attack</span>
                </div>
  
                <span className="poke-abilities m0-p0">
                  <select
                    id="abilities"
                    name="abilities"
                    className="m0-p0 abilities-ul ul-display select"
                  >
                    {eachData.abilities?.map((ability) => (
                      <option
                        value={ability.ability.name}
                        key={ability.ability.name}
                      >
                        {ability.ability.name}
                      </option>
                    ))}
                  </select>
                  <span className="bold-shadow">Abilities</span>
                </span>
              </div>
            </div>
          </div>
        ))}
  
        {pokeData.length > 0 && filteredData.length === 0 && (
          <h4 className="no-results">
            Error: 404 - No Pokémon matched your search
          </h4>
        )}
      </div>
    );
  }
  