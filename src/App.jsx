import { useEffect, useState } from 'react'
import './App.css'
import { Suspense } from 'react'
import { Link, NavLink, Routes, Route, useSearchParams } from 'react-router-dom'
import MovieList from './MovieList';
import Landing from './Landing';
import MoviePage from './MoviePage';
import Header from './Header';

function App() {

  return (
    <>
    <Header/>
    <Suspense fallback={<p>...</p>}>
      <Routes>
        <Route path='/absolute-cinema' element={<Landing/>}></Route>
        <Route path='/absolute-cinema/movies' element={<MovieList/>}></Route>
        <Route path='/absolute-cinema/movies/:mvid' element={<MoviePage/>}>
          {/* <Route path='/absolute-cinema/movies/:mvid/cast'></Route>
          <Route path='/absolute-cinema/movies/:mvid/reviews'></Route> */}
        </Route>
      </Routes>
      {/* <input type='text'/>
      <div id='movies-cont'>
        <div className='movie'>
          {movies.map((x,i)=>(
            <p key={x.id}>{i} <Link to={`./movies/${x.id}`}>{x.title ?? x.name}</Link></p>
          ))}
        </div>
      </div> */}
    </Suspense>
    </>
  )
}

export default App
