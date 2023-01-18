import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { MovieCard } from "./MovieCard";

interface IContentProps {
  selectedGenre: GenreType
  movies: MovieType[]
}

export function Content({selectedGenre, movies}: IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span>{selectedGenre.title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>

  )
}