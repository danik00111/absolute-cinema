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
    {movie.title ?? movie.name}
    </div>
    <div id='movie-overview' style={{width:'400px',margin:'16px auto 0'}}>
    {movie.overview}
    </div>
  </>)
}; export default MoviePage;