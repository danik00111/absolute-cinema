import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const MovieList =()=> {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
        method: 'GET',
        headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQyYjM1NWQ2ZTQ4ZmY3MDU2NTgzYWYwYTQwOWQ0NCIsIm5iZiI6MTc0NDIxMzM4NS4xNTY5OTk4LCJzdWIiOiI2N2Y2OTU4OWNjZTc2OTAyMzBhY2VkM2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4NqxNVWatdHZaA7idTe2Vrsx0kqLKnMBWw1rqL5g8SM' }
      })
      .then(res => res.json())
      .then(res => {console.log(res);setMovies(res.results)})
      .catch(err => console.error(err));
  },[])
  
  return (<>
    <input type='text' placeholder='Search...' onChange={(e=>setFilter(e.target.value))}/>
    <div id='movies-cont'>
      <div className='movie'>
        {movies.filter(x=>(
          (x.title ?? x.name).toLowerCase().includes(filter.toLowerCase())
        )).map((x,i)=>(
          <p key={x.id}><Link to={`./${x.id}`}>{x.title ?? x.name}</Link></p>
        ))}
      </div>
    </div>
  </>)
}

export default MovieList;