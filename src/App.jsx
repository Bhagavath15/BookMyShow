import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';


export default function App() {
  const [movieList, setMovieList] = useState([{
    id: 1,
    name: "Vikram",
    poster: "data:image/jpeg;base64,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",
    trailer: "trailer",
    summary: "summary",
    rating: 8.4
  },
  {
    id: 2,
    name: "Vikram",
    poster: "data:image/jpeg;base64,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",
    trailer: "trailer",
    summary: "summary",
    rating: 8.4
  },
  {
    id: 3,
    name: "Vikram",
    poster: "data:image/jpeg;base64,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",
    trailer: "trailer",
    summary: "summary",
    rating: 8.4
  }])
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}>
              Home
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} />} />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList} setMovieList={setMovieList} />} />
      </Routes>
      {/* <Home />
      <MovieList /> */}
    </div>
  )
}
function MovieDetails({ movieList }) {
  const { id } = useParams()
  const movie = movieList[id]
  return (
    <div>Movie details {movie.name}</div>
  )
}

function Home() {
  return (
    <div>Welcome to bookmyshow</div>

  )
}

function MovieList({ movieList }) {

  return (
    <div className="movie-list">
      {movieList.map((mv, id) => <Movies key={mv.id} movie={mv} id={mv.id} />)}
    </div>
  )
}
function Movies({ movie, id }) {
  const navigate = useNavigate()
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />

      <div>
        <div className="movie-data">

          <p className="movie-name"><h2>{movie.name}</h2>
          </p>
          <IconButton color="primary" fontSize="small"
            onClick={() => navigate(`/movies/${id}`)}
            arial-label="movie-details">
            <InfoIcon />
          </IconButton>
          <p className="movie-rating">⭐{movie.rating}</p>

        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div >
    </div >
  )
}