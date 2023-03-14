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
    "id": "99",
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
  },
  {
    "id": "100",
    "name": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    "id": "101",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
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
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Marvel"
        frameborder="0"
        allow="accelerometer; autoplay;clipboard-white"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <h1>Movie Details of {movie.name}</h1>
      </div>

    </div>

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