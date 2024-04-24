import "./App.css";
import Layout from "./components/Layout/Layout";

import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

import Notification from "./components/UI/Notification";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { uiActions } from "./components/store/ui-slice";
import { sendCartData } from "./components/store/cart-actions";
import { fetchCartData } from "./components/store/cart-actions";
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData);
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "Pending",
    //       title: "Sending....",
    //       message: "Sending cart data!!",
    //     })
    //   );
    //   const response = await fetch(
    //     "https://reduxadvapp-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Sending cart data fail ");
    //     // dispatch(
    //     //   uiActions.showNotification({
    //     //     status: "error",
    //     //     title: "Error....",
    //     //     message: "Sending cart data failed!!",
    //     //   })
    //     //  );
    //   }
    //   const responseData = await response.json();
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success....",
    //       message: "Sending cart data successfully!!",
    //     })
    //   );
    // };
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error....",
    //       message: "Sending cart data failed!!",
    //     })
    //   );
    // });

    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
