import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './Nav/Nav.tsx'
import Meaning from './Meaning/Meaning.tsx'
import BrandSpotlight from './BrandSpotlight/BrandSpotlight.tsx'
import ProductSearch from './ProductSearch/ProductSearch.tsx'
import SignUp from './SignUp/SignUp.tsx'
import LogIn from './LogIn/LogIn.tsx'
import Profile from './Profile/Profile.tsx'
import TheBeat from './TheBeat/TheBeat.tsx'

const App = () => {
  return (
    <>
      <h1 className="main-header">Know Cap</h1>
      <Nav />
        <Meaning />
        <BrandSpotlight />
        <ProductSearch />
        <SignUp />
        <LogIn />
        <Profile />
        <TheBeat />
    </>
  )
}
export default App


