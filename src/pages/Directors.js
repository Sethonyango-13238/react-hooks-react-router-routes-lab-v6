import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ErrorPage from "./ErrorPage";

function Directors() {
  const directors = [
    { name: 'Director 1', movies: ['Movie 1', 'Movie 2'] },
    { name: 'Director 2', movies: ['Movie 3'] },
  ];
  return (
    <>
      <header>
       <NavBar/>
      </header>
      <main>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
        <ErrorPage/>
      </main>
    </>
  );
};

export default Directors;
