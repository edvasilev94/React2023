import {Routes, Route} from 'react-router-dom';

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

function App() {
  return (
    <AuthProvider >
      <div className='divContainer'>
        <Navbar />
        <Routes>
          <Route path='/' element= { <HomePage /> } />
          <Route path='/tracks' element= { <AllTracks /> } />
          <Route path='/create' element= { <Create />} />
          <Route path='/register' element= {<Register />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/card' element= {<CardTemplate />} />
          <Route path='/track/details/:trackId' element= {<TrackDetails />} />
          <Route path='/*' element= {<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
