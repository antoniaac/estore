import { useDispatch, useSelector } from "react-redux";
import "./_product.scss";
import productSlice from "../../Redux/slices/store";
import { useEffect } from "react";
import { getProducts } from "../../Redux/slices/Products/productAction";
import { addCartItem } from "../../Redux/slices/Cart/cartSlice";

const Products = () => {
  const productData = useSelector((state) => state.pr.products);
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (itemData) => {
    dispatch(addCartItem(itemData));
  };
  console.log(cart);

  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img src={require("../../assets/" + product.product_img)}></img>
            </div>
            <div>
              <h5 className="product-details">
                <a href="#">{product.product_name}</a>
                <p> ${product.price}</p>
              </h5>
              <div className="my-3 " onClick={() => addToCart(product)}>
                <div className="cart-button">
                  <div className="cart-icon-container">
                    <i className="fa fa-shopping-cart mx-4"></i>
                  </div>

                  <div className="cart-text-container mx-3">
                    {" "}
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
