// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
// import { Profile } from './components/Profile/Profile';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' Component={Profile} />
            <Route path='/profile' Component={Profile} />
            <Route path='/dialogs' Component={Dialogs} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;