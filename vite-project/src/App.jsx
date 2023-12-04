import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Footer from "./components/Footer/Footer";
import Create from "./components/Create/Create";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage';
import CardTemplate from './components/CardTemplate/CartTemplate';
import AllTracks from './components/AllTracks/AllTracks';
import TrackDetails from './components/TrackDetails/TrackDetails';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Loguout/Logout';
import MyTracks from './components/MyTracks/MyTracks';
import Edit from './components/EditTrack/Edit';
import AuthGuardGuest from './components/guards/AuthGuardGuest'
import AuthGuardUser from './components/guards/AuthGuardUser';

function App() {
  return (
    <AuthProvider >
      <div className='divContainer'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tracks' element={<AllTracks />} />
          <Route element={<AuthGuardGuest />}>
            <Route path='/mytracks' element={<MyTracks />} />
            <Route path='/create' element={<Create />} />
            <Route path='/logout' element={<Logout />} /> 
            <Route path='/track/edit/:trackId' element={<Edit />} />
          </Route>
          <Route element={<AuthGuardUser />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/card' element={<CardTemplate />} />
          <Route path='/track/details/:trackId' element={<TrackDetails />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
