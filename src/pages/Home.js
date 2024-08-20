import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const movies=[
    {id:1, title:'Movie 1'},
    {id:2, title:'Movie 2'}
  ];
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie=>
          <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
        )}
      </main>
    </>
  );
};

export default Home;
