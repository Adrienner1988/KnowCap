import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Meaning from './views/Meaning/Meaning.tsx';
import ProductSearch from './views/ProductSearch/ProductSearch.tsx';
import SignUp from './views/SignUp/SignUp.tsx';
import LogIn from './views/LogIn/LogIn.tsx';
import Profile from './views/Profile/Profile.tsx';
import TheBeat from './views/TheBeat/TheBeat.tsx';
import { Route, Routes } from 'react-router-dom';
import CreatePost from './views/CreatePost/CreatePost.tsx';
import Nav from './componets/Nav/Nav.tsx';


const App = () => {



  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Meaning />} />
        <Route path='/search' element={<ProductSearch />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/beat' element={<TheBeat />} />
        <Route path='/post' element={<CreatePost />} />
      </Routes>
      
    </>
  );
};
export default App


