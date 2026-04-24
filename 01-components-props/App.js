
import movies from "./data/movies";
import MovieCard from "./components/MovieCard"


function App() {
  return (
    <div>
      <h1 style={{alignItems:'center'}}>MOVİE LİST</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            genre={movie.genre}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
