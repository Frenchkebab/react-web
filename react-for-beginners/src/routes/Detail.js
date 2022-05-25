import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Link to={`/`}>
        <h1>Home</h1>
      </Link>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      )}
    </div>
  );
};

export default Detail;
