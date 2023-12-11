import { useEffect, useState } from 'react'
import './ProductSearch.css'
// import { BsSearchHeartFill } from "react-icons/bs";

interface Makeup {
  name: string
}

const ProductSearch = () => {
  const [product, setProduct] = useState<Makeup>({
    name: ''
  })


  useEffect(() => {
    getProduct();
  }, [product.name])

  const getProduct = async () => {
    const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json${product.name}`);
    if (response.ok) {}
    const data = await response.json();
    console.log(data)
    setProduct({
      name: data.brand
    })
  }

  return (
    <>
      <h1 className="search-header">Search your new favorite products!</h1>
      
      <form className="search-form">
        <input className="search-input" type="text" id="search" name="search" placeholder="Search" onChange={(event) => { setProduct({ ...product, name: event.target.value }); }} />
        {/* <button className='search-btn' type="submit" defaultValue="Submit">Search <BsSearchHeartFill /></button> */}
      </form>

      <div className="card">
        <img className='brand-image' src="" alt="" />
        <div className="container">
          <h4 className='brand-name'><b>Brand Name</b></h4>
          <p className='product-name'>Product Name</p>
          <p className="price">$19.99</p>
          <p className="">Some text about the product</p>
        </div>
      </div>

    </>
  )
}
export default ProductSearch