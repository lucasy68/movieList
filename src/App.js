import MovieList from "./components/MovieList/MovieList";
import Navigation from "./components/navigation/Navigation";
import "./App.scss";

function App() {
  return (
    <div>
      <Navigation />
      <div className="title">
        <h1>MOVIE COMING SOON</h1>
      </div>
      <MovieList />
    </div>
  );
}

export default App;
