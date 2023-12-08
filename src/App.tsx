import BrandSpotlight from "./BrandSpotlight/BrandSpotlight"
import Meaning from "./Meaning/Meaning"
import Nav from "./Nav/Nav"
import ProductSearch from "./ProductSearch/ProductSearch"
import "./index.css"

const App = () => {
  return (
    <>
      <h1 className="main-header">Know Cap</h1>
      <Nav/>
      <Meaning/>
      <BrandSpotlight/>
      <ProductSearch/>
    </>
  )
}
export default App


