import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import React from "react";

function Actors() {
  const actors = [
    { name: 'Actor 1', movies: ['Movie 1', 'Movie 2'] },
    { name: 'Actor 2', movies: ['Movie 3'] },
  ];
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <div key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, id) => (
                <li key={id}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
};

export default Actors;
