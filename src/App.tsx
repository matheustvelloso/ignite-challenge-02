import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Content } from './components/Content';
import { GenreType } from './types/GenreType';
import { MovieType } from './types/MovieType';
import { SideBar } from './components/SideBar';



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreType[]>([]);

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreType>({} as GenreType);

  useEffect(() => {
    api.get<GenreType[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieType[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreType>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        handleClickButton={handleClickButton}
        genres={genres}
        selectedGenreId={selectedGenreId}
      />
        <Content selectedGenre={selectedGenre} movies={movies} />        
    </div>
  )
}