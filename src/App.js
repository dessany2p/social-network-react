import './App.css';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
// import { Friends } from './components/Friends/Friends';

const App = (props) => {
  // console.log(props, 'APP')
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={
              <Profile />} />
            <Route path='/profile' element={
              <Profile />} />
            <Route path='/dialogs' element={
              <DialogsContainer />} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' element={<Settings />} />
            {/* <Route path='/friends' element={<Friends } />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;