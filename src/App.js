import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row 
      title="Trending Now" 
      fetchUrl={requests.fetchTrending} 
      isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming}/>
    </div>
  );
}

export default App;
