import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
const initialState = {
  cartList: [],
  total: 0,
};
const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updateCartList = state.cartList.concat(product);
    // console.log(updateCartList);
    updateTotal(updateCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updateCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateTotal = (product) => {
    let total=0;
    product.forEach(product=>total=total+Number(product.price))
    console.log(total);
    dispatch({
      type:"UPDATE_TOTAL",
      payload:{
        total
      }
    })
  };
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
