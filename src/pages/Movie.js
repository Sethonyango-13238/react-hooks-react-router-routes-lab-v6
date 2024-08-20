import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';


function Movie() {
  const {id} = useParams();

  const movie={
    title:'Movie Title',
    time:'120 min',
    genres:['Action','Adventure']
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
      </main>
    </>
  );
};

export default Movie;
