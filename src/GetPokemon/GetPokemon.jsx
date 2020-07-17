import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const GetPokemon = () => {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(null);

  const pokiAPI = async () => {
    try {
      const data = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then((data) => {
          setName(data.data.name);
          setLoading(true);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    pokiAPI();
  });

  //   useEffect(() => {
  //     async function getData() {
  //       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  //       console.log(res);
  //     }
  //     getData();
  //   });
  return (
    <React.Fragment>
      <h1>You chose : {num}</h1>
      {loading ? (
        <h2>Pokemon name : {name}</h2>
      ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <select
        name=""
        id=""
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </React.Fragment>
  );
};

export default GetPokemon;
