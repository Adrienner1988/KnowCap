import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import  { Makeup }  from "../ProductSearch/ProductSearch";

const FavList = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            if (auth.currentUser) {
                const favListRef = collection(
                    db,
                    "users",
                    auth.currentUser.uid,
                    "FavList"
                );
                const favListSnapshot = await getDocs(favListRef);
                const favProducts = favListSnapshot.docs.map((doc) => doc.data());
                setFavoriteProducts(favProducts);
            }
        };

        fetchFavorites();
    }, []);

    return <FavoriteList favoriteProducts={favoriteProducts} />;
};

const removeFromList = async (selectedProduct: Makeup) => {
    if (auth.currentUser) {
        await deleteDoc(
            doc(
                db,
                "users",
                auth.currentUser.uid,
                "FavList",
                selectedProduct.brand
            )
        );

        alert(
            `${selectedProduct.item_name} has been removed from your Favorites List.`
        );

        // Update the local state to reflect the removed item
        setFavoriteProducts((prevFavorites) =>
            prevFavorites.filter((product) => product.brand !== selectedProduct.brand)
        );
    }
};

const FavoriteList = ({ favoriteProducts }) => {
    return (
        <>
            <div>
                {favoriteProducts.map((product) => (
                    <div key={product.brand}>
                        <img src={product.image} alt={product.item_name} />
                        <h3>{product.item_name}</h3>
                        <p>{product.description}</p>
                        <a href={product.product_link}>Buy Now</a>
                        <button onClick={() => removeFromList(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

}

export default FavList