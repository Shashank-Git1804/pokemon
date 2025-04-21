import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PokemonCards from './PokemonCards.jsx';


gsap.registerPlugin(ScrollTrigger);

export default function Card() {
  const API = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=102`;

  const [pokeData, setPokeData] = useState([]);
  const [searchVal, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dropdown, setDropdown] = useState("name");
  const [mode, setMode] = useState(false);
  var TL = gsap.timeline();

  // NOTE - Fetch all Pokémon data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        const urls = data.results.map((result) => result.url);
        const allData = await Promise.all(
          urls.map(async (url) => {
            const res = await fetch(url);
            return await res.json();
          })
        );
        setPokeData(allData.sort((a, b) => a.id - b.id));
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);

  // NOTE - Filter Pokémon data
  useEffect(() => {
    let filtered = [];

    const matchesSearch = (eachData) =>
      eachData.name.toLowerCase().includes(searchVal.toLowerCase());

    if (dropdown === "name") {
      filtered = pokeData.filter(matchesSearch);
    } else if (dropdown === "type") {
      filtered = pokeData.filter((eachData) =>
        eachData.types.some((type) =>
          type.type.name.toLowerCase().includes(searchVal.toLowerCase())
        )
      );
    } else if (dropdown === "attack-desc") {
      filtered = pokeData
        .filter(matchesSearch)
        .sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat);
    } else if (dropdown === "attack-asc") {
      filtered = pokeData
        .filter(matchesSearch)
        .sort((a, b) => a.stats[1].base_stat - b.stats[1].base_stat);
    } else if (dropdown === "defence-desc") {
      filtered = pokeData
        .filter(matchesSearch)
        .sort((a, b) => b.stats[2].base_stat - a.stats[2].base_stat);
    } else if (dropdown === "defence-asc") {
      filtered = pokeData
        .filter(matchesSearch)
        .sort((a, b) => a.stats[2].base_stat - b.stats[2].base_stat);
    } else if (dropdown === "hp-desc") {
      filtered = pokeData
        .filter(matchesSearch)
        .sort((a, b) => b.stats[0].base_stat - a.stats[0].base_stat);
    } else if (dropdown === "hp-asc") {
      filtered = pokeData
        .filter(matchesSearch)
        .sort((a, b) => a.stats[0].base_stat - b.stats[0].base_stat);
    } else {
      filtered = pokeData.filter(matchesSearch);
    }

    setFilteredData(filtered);
  }, [searchVal, pokeData, dropdown]);

  useGSAP(() => {
    TL.from(".heading", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
    TL.from(".input-search", {
      opacity: 0,
      duration: 0.5,
    });
    TL.from(".mode", {
      opacity: 0,
      duration: 0.5,
    });
  });

  useGSAP(() => {
    TL.from(".card-body", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
    });
  }, [filteredData]);

  useEffect(() => {
    if (searchVal.trim() === "") {
      setDropdown("name");
    }
  }, [searchVal]);

  return (
    <div className={`poke-container ${mode ? "day-theme" : ""}`}>
      <div
        className="mode"
        onClick={() => {
          setMode(!mode);
        }}
      >
        <button className="mode-btn">
          {mode ? (
            <MdOutlineLightMode className="light-mode" />
          ) : (
            <MdDarkMode className="dark-mode" />
          )}{" "}
          <span id="theme-text">Theme</span>
        </button>
      </div>

      <header>
        <h1 className="heading">Pokémon Cards</h1>
      </header>

      <div className="input-search" id="search">
        <input
          type="search"
          name="search"
          id="search-input"
          value={searchVal}
          onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder="Search Pokémon Cards"
        />
        <select
          name="searchSelect"
          id="searchSelect"
          aria-label="Search Pokémon by name or type"
          value={dropdown}
          onChange={(evt) => setDropdown(evt.target.value)}
        >
          <optgroup label="Search by">
            <option value="name">Name (default)</option>
            <option value="type">Type</option>
          </optgroup>
          <optgroup label="Sort by">
            <option value="attack-desc">Attack: High to Low</option>
            <option value="attack-asc">Attack: Low to High</option>
            <option value="defence-desc">Defence: High to Low</option>
            <option value="defence-asc">Defence: Low to High</option>
            <option value="hp-desc">HP: High to Low</option>
            <option value="hp-asc">HP: Low to High</option>
          </optgroup>
        </select>
      </div>

      <PokemonCards pokeData={pokeData} filteredData={filteredData} />
    </div>
  );
}
