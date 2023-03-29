import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
          theme="dark"
        ></ToastContainer>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
