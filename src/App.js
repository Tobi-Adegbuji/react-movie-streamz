import './App.css';
import Row from "./components/Row"; 
import endpoints from "./request"; 

function App() {
  return (
    <div className="App">
     <Row title="TRENDING TODAY" getUrl={endpoints.trendingMovies}/>
    </div>
  );
}

export default App;
