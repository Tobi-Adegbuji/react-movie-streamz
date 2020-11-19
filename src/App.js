import './App.css';
import Row from "./components/Row"; 
import endpoints from "./request"; 
import MovieBanner from "./components/MovieBanner"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <MovieBanner/>
      {/* isLargeRow is a boolean. */}
     <Row title="TRENDING TODAY" getUrl={endpoints.trendingMovies} isLargeRow/> 
     <Row title="COMEDY" getUrl={endpoints.trendingMovies}/>
     <Row title="ROMANCE" getUrl={endpoints.trendingMovies}/>
     <Row title="ACTION" getUrl={endpoints.trendingMovies}/>
     <Row title="SUSPENSE" getUrl={endpoints.trendingMovies}/>
     <Row title="HORROR" getUrl={endpoints.trendingMovies}/>
    </div>
  );
}

export default App;
