// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/component';
import ListOFFruits from './components/list';
import Greeting from './components/greeting';
// import PropImplement from './components/props';
// import ToggleVisibility from './components/toggle';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Submitted from './components/submit';
import HomePage from './components/home';
import FetchExample from './components/fetch';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route exact path='/' element ={<HomePage />}/> 
        <Route exact path="/greet" element={<FetchExample />}/> 
        <Route exact path="/list" element={<Submitted />}/>
          {/* {<Submitted/>}
        </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
