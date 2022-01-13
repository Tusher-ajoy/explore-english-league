import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div style={{backgroundColor:'#0E0A2A'}}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} /> 
            <Route path='/home' element={<Home />} />
            <Route path='/team-details/:teamId' element={<TeamDetails />} />
            <Route path='*' element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
