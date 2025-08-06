import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

const MoviePage =()=> {
  const [movie, setMovie] = useState({});
  const {mvid} = useParams();
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${mvid}`, {
      method: 'GET',
      headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQyYjM1NWQ2ZTQ4ZmY3MDU2NTgzYWYwYTQwOWQ0NCIsIm5iZiI6MTc0NDIxMzM4NS4xNTY5OTk4LCJzdWIiOiI2N2Y2OTU4OWNjZTc2OTAyMzBhY2VkM2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4NqxNVWatdHZaA7idTe2Vrsx0kqLKnMBWw1rqL5g8SM' }
    }).then(res => res.json())
      .then(res => {console.log(JSON.stringify(res,null,' '));setMovie(res)})
      .catch(err => console.error(err));
  },[])
  return (<>
    {mvid}
    <div id='movie-title' style={{marginTop:'16px'}}>
      <b>{movie.title ?? movie.name}</b>
    </div>
    <br/>
    <div id='movie-overview' style={{width:'400px',margin:'0 auto'}}>
      <div id="movie-desc" style={{
        width: '368px',
        padding: '16px',
        margin: '0 auto',
        backgroundImage: `linear-gradient(to bottom right, #ffffffc0,#ffffff40), url('https://image.tmdb.org/t/p/w400${movie.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        {movie.overview}
      </div>
    </div>
  </>)
}; export default MoviePage;