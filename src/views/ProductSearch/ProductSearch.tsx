import { useEffect, useState } from "react";
import "./ProductSearch.css";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { KCLightBrown } from "../../Images";

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
  const [searchProducts, setSearchProducts] = useState<string>("");
  // const [showMore, setShowMore] = useState<string[]>([]);

  useEffect(() => {
    if (searchProducts) {
      getProduct();
    }
  }, [searchProducts]);

  const getProduct = async () => {
    try {
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchProducts}`
      );
      if (response.ok) {
        const data = await response.json();
        const productData = data.map((item: any) => ({
          brand: item.brand,
          image: item.api_featured_image,
          item_name: item.name,
          category: item.category,
          description: item.description,
          product_link: item.product_link,
        }));
        setProducts(productData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToList = async (selectedProduct: Makeup) => {
    if (auth.currentUser) {
      const productData = {
        brand: selectedProduct.brand,
        image: selectedProduct.image,
        item_name: selectedProduct.item_name,
        category: selectedProduct.category,
        description: selectedProduct.description,
        product_link: selectedProduct.product_link,
      };

      await setDoc(
        doc(
          db,
          "users",
          auth.currentUser.uid,
          "FavList",
          selectedProduct.brand
        ),
        productData
      );

      alert(
        `${selectedProduct.item_name} has been added to your Favorites List.`
      );
    }
  };



  // const toggleReadMore = (itemId: string) => {
  //   setShowMore((prevExpandedItems) => {
  //     if (prevExpandedItems.includes(itemId)) {
  //       return prevExpandedItems.filter((id) => id !== itemId);
  //     } else {
  //       return [...prevExpandedItems, itemId];
  //     }
  //   });
  // }

  return (
    <>
      <img
        className="search-logo"
        src={KCLightBrown}
        alt="logo"
      />
      <h1 className="search-header">Search your new favorite products here!</h1>
      <p className="paragraph">
        Search your favorite brands for information on their products or head
        over to The Beat to see them in action from your friends and influencers.
      </p>

      {/* search input */}
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          value={searchProducts}
          onChange={(event) => setSearchProducts(event.target.value)}
        />
      </form>

      {/* brands currently offered */}
      <h2 className="brands">Current Brand List</h2>
      <div className="tag_list">
        <div className="tag">
          <h6>almay</h6>
        </div>
        <div className="tag">
          <h6>alva</h6>
        </div>
        <div className="tag">
          <h6>anna sui</h6>
        </div>
        <div className="tag">
          <h6>annabelle</h6>
        </div>
        <div className="tag">
          <h6>benefit</h6>
        </div>
        <div className="tag">
          <h6>boosh</h6>
        </div>
        <div className="tag">
          <h6>burt's bees</h6>
        </div>
        <div className="tag">
          <h6>butter london</h6>
        </div>
        <div className="tag">
          <h6>c'est moi</h6>
        </div>
        <div className="tag">
          <h6>cargo cosmetics</h6>
        </div>
        <div className="tag">
          <h6>china glaze</h6>
        </div>
        <div className="tag">
          <h6>clinique</h6>
        </div>
        <div className="tag">
          <h6>coastal classic creation</h6>
        </div>
        <div className="tag">
          <h6>colourpop</h6>
        </div>
        <div className="tag">
          <h6>covergirl</h6>
        </div>
        <div className="tag">
          <h6>dalish</h6>
        </div>
        <div className="tag">
          <h6>deciem</h6>
        </div>
        <div className="tag">
          <h6>dior</h6>
        </div>
        <div className="tag">
          <h6>dr. hauschka</h6>
        </div>
        <div className="tag">
          <h6>e.l.f.</h6>
        </div>
        <div className="tag">
          <h6>essie</h6>
        </div>
        <div className="tag">
          <h6>fenty</h6>
        </div>
        <div className="tag">
          <h6>glossier</h6>
        </div>
        <div className="tag">
          <h6>green people</h6>
        </div>
        <div className="tag">
          <h6>iman</h6>
        </div>
        <div className="tag">
          <h6>l'oreal</h6>
        </div>
        <div className="tag">
          <h6>lotus cosmetics usa</h6>
        </div>
        <div className="tag">
          <h6>maia's mineral galaxy</h6>
        </div>
        <div className="tag">
          <h6>marcelle</h6>
        </div>
        <div className="tag">
          <h6>marienatie</h6>
        </div>
        <div className="tag">
          <h6>maybelline</h6>
        </div>
        <div className="tag">
          <h6>milani</h6>
        </div>
        <div className="tag">
          <h6>mineral fusion</h6>
        </div>
        <div className="tag">
          <h6>misa</h6>
        </div>
        <div className="tag">
          <h6>mistura</h6>
        </div>
        <div className="tag">
          <h6>moov</h6>
        </div>
        <div className="tag">
          <h6>nudus</h6>
        </div>
        <div className="tag">
          <h6>nyx</h6>
        </div>
        <div className="tag">
          <h6>orly</h6>
        </div>
        <div className="tag">
          <h6>pacifica</h6>
        </div>
        <div className="tag">
          <h6>penny lane organics</h6>
        </div>
        <div className="tag">
          <h6>physicians formula</h6>
        </div>
        <div className="tag">
          <h6>piggy paint</h6>
        </div>
        <div className="tag">
          <h6>pure anada</h6>
        </div>
        <div className="tag">
          <h6>rejuva minerals</h6>
        </div>
        <div className="tag">
          <h6>revlon</h6>
        </div>
        <div className="tag">
          <h6>sally b's skin yummies</h6>
        </div>
        <div className="tag">
          <h6>salon perfect</h6>
        </div>
        <div className="tag">
          <h6>sante</h6>
        </div>
        <div className="tag">
          <h6>sinful colours</h6>
        </div>
        <div className="tag">
          <h6>smashbox</h6>
        </div>
        <div className="tag">
          <h6>stila</h6>
        </div>
        <div className="tag">
          <h6>suncoat</h6>
        </div>
        <div className="tag">
          <h6>w3llpeople</h6>
        </div>
        <div className="tag">
          <h6>wet n wild</h6>
        </div>
        <div className="tag">
          <h6>zorah</h6>
        </div>
        <div className="tag">
          <h6>zorah biocosmetiques</h6>
        </div>
      </div>

      {/* map of products */}
      <div className="card-container">
        {products &&
          products.map((item, index) => (
            <div key={index} className="card">
              <h2 className="brand-name">
                <b>{item.brand}</b>
              </h2>
              <img className="brand-image" src={item.image} />
              <h3 className="product-name">{item.item_name}</h3>
              <h4 className="category">{item.category}</h4>
              <Link
                to={item.product_link}
                target="_blank"
                className="product-link"
              >
                Go to site
              </Link>
              {/* <p className='description'>{item.description}
              {showMore.includes(item.item_name) ? item.description : `${item.description.slice(0, 200)}...`}
              <button className='readMore' onClick={() => toggleReadMore(item.item_name)}>
                {showMore.includes(item.item_name) ? 'Read Less' : 'Read More'}</button></p> */}

              <button
                className="favList"
                onClick={() => addToList(products[0])}
                id="btn"
              >
                <FaRegHeart />
              </button>
            </div>
          ))}
      </div>
    </>
  );
};
export default ProductSearch;
