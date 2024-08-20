import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <link to={`/movie/${id}`}>More Details</link>
    </article>
  );
};

export default MovieCard;