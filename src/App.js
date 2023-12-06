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
import { Friends } from './components/Friends/Friends';
// import { addInfo } from './redux/state';

const App = (props) => {
  console.log('App.js props:', props)
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
                  posts={props.state.profilePage.posts}
                />} />
            <Route path='/profile' element={
              <Profile
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
              />} />
            <Route path='/dialogs'
              element={
                <Dialogs
                  state={props.state.msgPage}
                />} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends state={props.state.msgPage.dialogs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;