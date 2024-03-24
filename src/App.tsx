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
import Nav from './componets/Nav/components.tsx';
import ProfileForm from './views/Profile/ProfileForm.tsx';


const App = () => {

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/meaning' element={<Meaning />} />
        <Route path='/search' element={<ProductSearch />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='/beat' element={<TheBeat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/form' element={<ProfileForm />} />
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />   
      </Routes>  
    </>
  );
};
export default App


