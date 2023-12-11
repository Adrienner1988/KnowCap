import { useEffect, useState, FormEvent } from 'react'
import './ProductSearch.css'
import { BsSearchHeartFill } from "react-icons/bs";

interface Makeup {
  brand: string;
  image: string;
  item_name: string;
  category: string;
  description: string;
  product_link: string;
}

const ProductSearch = () => {
  const [product, setProduct] = useState<Makeup>({
    brand: '',
    image: '',
    item_name: '',
    category: '',
    description: '',
    product_link: ''
  })

  useEffect(() => {
    getProduct();
  }, [product.brand, product.category, product.description, product.item_name])

  const getProduct = async () => {
    const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${product.brand}`);
    const data = await response.json();
    console.log(data)
    setProduct({
      brand: data.brand,
      image: data.api_featured_image,
      item_name: data.item,
      category: data.category,
      description: data.description,
      product_link: data.product_link
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <>
      <h1 className="search-header">Search your new favorite products!</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="text" id="search" name="search" placeholder="Search" onChange={(event) => { setProduct({ ...product, brand: event.target.value }); }} />
        <button className='search-btn' type="submit" defaultValue="Submit">Search <BsSearchHeartFill /></button>
      </form>

      {product.brand && (
        <div className="card">
          <div className="container">
            <h4 className='brand-name'><b>{product.brand}</b></h4>
            <img className='brand-image' src={product.image} alt="" />
            <p className='product-name'>{product.item_name}</p>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>
            <a href={product.product_link}>{product.product_link}</a>
          </div>
        </div>
      )}

    </>
  )
}
export default ProductSearch