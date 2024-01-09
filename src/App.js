import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  // console.log(props, 'APP')
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/*' element={
              <ProfileContainer />} />
            <Route path='/profile/:userID*' element={
              <ProfileContainer />
            } />
            <Route path='/dialogs' element={
              <DialogsContainer />} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={
              <UsersContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;