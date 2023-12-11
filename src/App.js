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
  // Link,
  // Navigate
} from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
// import { Friends } from './components/Friends/Friends';

const App = (props) => {
  // console.log(props, 'APP')
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.msgPage.dialogs} />
        <div className='content'>
          <Routes>
            <Route path='/'
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />} />
            <Route path='/profile' element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />} />
            <Route path='/dialogs'
              element={
                <Dialogs
                  state={props.state.msgPage} dispatch={props.dispatch}
                />} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' element={<Settings />} />
            {/* <Route path='/friends' element={<Friends state={props.state.msgPage.dialogs} />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;