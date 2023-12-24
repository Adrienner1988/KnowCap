import { useEffect, useState } from 'react';
import './ProductSearch.css';
import Nav from '../../componets/Nav/Nav';


interface Makeup {
  brand: string;
  image: string;
  item_name: string;
  category: string;
  description: string;
  product_link: string;
}

const ProductSearch = () => {
  const [products, setProducts] = useState<Makeup[]>([]);
  const [searchProducts, setSearchProducts] = useState<string>('');
  // const [showMore, setShowMore] = useState(false);
 

  useEffect(() => {
    if (searchProducts) {
      getProduct();
    }
  }, [searchProducts]);

  const getProduct = async () => {
    try {
      const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchProducts}`);
      if (response.ok) {
        const data = await response.json();
        const productData = data.map((item: any) => ({
          brand: item.brand,
          image: item.api_featured_image,
          item_name: item.name,
          category: item.category,
          description: item.description
        }));
        setProducts(productData);
      }
    } catch (error) {
      console.error(error);
    }
  }

 
  // Read more drop down button
  // const handleClick = () => { 
  // }

  return (
    <>
      <Nav />
      <h1 className="search-header">Search your new favorite products!</h1>
      {/* search input */}
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          value={searchProducts}
          onChange={(event) => setSearchProducts(event.target.value)} />
      </form>
      {/* brands currently offered */}
      <h2 className='brands'>Brands list</h2>
      <div className="tag_list">
        <div className="tag">
          <h4>almay</h4>
        </div>
        <div className="tag">
          <h4>alva</h4>
        </div>
        <div className="tag">
          <h4>anna sui</h4>
        </div>
        <div className="tag">
          <h4>annabelle</h4>
        </div>
        <div className="tag">
          <h4>benefit</h4>
        </div>
        <div className="tag">
          <h4>boosh</h4>
        </div>
        <div className="tag">
          <h4>burt's bees</h4>
        </div>
        <div className="tag">
          <h4>butter london</h4>
        </div>
        <div className="tag">
          <h4>c'est moi</h4>
        </div>
        <div className="tag">
          <h4>cargo cosmetics</h4>
        </div>
        <div className="tag">
          <h4>china glaze</h4>
        </div>
        <div className="tag">
          <h4>clinique</h4>
        </div>
        <div className="tag">
          <h4>coastal classic creation</h4>
        </div>
        <div className="tag">
          <h4>colourpop</h4>
        </div>
        <div className="tag">
          <h4>covergirl</h4>
        </div>
        <div className="tag">
          <h4>dalish</h4>
        </div>
        <div className="tag">
          <h4>deciem</h4>
        </div>
        <div className="tag">
          <h4>dior</h4>
        </div>
        <div className="tag">
          <h4>dr. hauschka</h4>
        </div>
        <div className="tag">
          <h4>e.l.f.</h4>
        </div>
        <div className="tag">
          <h4>essie</h4>
        </div>
        <div className="tag">
          <h4>fenty</h4>
        </div>
        <div className="tag">
          <h4>glossier</h4>
        </div>
        <div className="tag">
          <h4>green people</h4>
        </div>
        <div className="tag">
          <h4>iman</h4>
        </div>
        <div className="tag">
          <h4>l'oreal</h4>
        </div>
        <div className="tag">
          <h4>lotus cosmetics usa</h4>
        </div>
        <div className="tag">
          <h4>maia's mineral galaxy</h4>
        </div>
        <div className="tag">
          <h4>marcelle</h4>
        </div>
        <div className="tag">
          <h4>marienatie</h4>
        </div>
        <div className="tag">
          <h4>maybelline</h4>
        </div>
        <div className="tag">
          <h4>milani</h4>
        </div>
        <div className="tag">
          <h4>mineral fusion</h4>
        </div>
        <div className="tag">
          <h4>misa</h4>
        </div>
        <div className="tag">
          <h4>mistura</h4>
        </div>
        <div className="tag">
          <h4>moov</h4>
        </div>
        <div className="tag">
          <h4>nudus</h4>
        </div>
        <div className="tag">
          <h4>nyx</h4>
        </div>
        <div className="tag">
          <h4>orly</h4>
        </div>
        <div className="tag">
          <h4>pacifica</h4>
        </div>
        <div className="tag">
          <h4>penny lane organics</h4>
        </div>
        <div className="tag">
          <h4>physicians formula</h4>
        </div>
        <div className="tag">
          <h4>piggy paint</h4>
        </div>
        <div className="tag">
          <h4>pure anada</h4>
        </div>
        <div className="tag">
          <h4>rejuva minerals</h4>
        </div>
        <div className="tag">
          <h4>revlon</h4>
        </div>
        <div className="tag">
          <h4>sally b's skin yummies</h4>
        </div>
        <div className="tag">
          <h4>salon perfect</h4>
        </div>
        <div className="tag">
          <h4>sante</h4>
        </div>
        <div className="tag">
          <h4>sinful colours</h4>
        </div>
        <div className="tag">
          <h4>smashbox</h4>
        </div>
        <div className="tag">
          <h4>stila</h4>
        </div>
        <div className="tag">
          <h4>suncoat</h4>
        </div>
        <div className="tag">
          <h4>w3llpeople</h4>
        </div>
        <div className="tag">
          <h4>wet n wild</h4>
        </div>
        <div className="tag">
          <h4>zorah</h4>
        </div>
        <div className="tag">
          <h4>zorah biocosmetiques</h4>
        </div>
      </div>

      {/* map of products */}
      <div className='card-container'>
        {products && products.map((item, index) => (
          <div key={index} className='card'>
            <h1 className='brand-name'><b>{item.brand}</b></h1>
            <img className='brand-image' src={item.image} />
            <h3 className='product-name'>{item.item_name}</h3>
            <h3 className='category'>{item.category}</h3>
            <h4 className='description'>{item.description}
            </h4>
           {/* <button onClick={handleClick} id="btn">Read more</button> */}
          </div>
        ))}
      </div>
    </>
  )
}
export default ProductSearch;
