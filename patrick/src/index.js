import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { store } from "./state/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from 'react-redux'
// import  {persistStore }from "redux-persist";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

/* </PersistGate>
    </Provider> 
    <Provider store={store}
      <PersistGate loading={null} persistor={persistStore(store)}> */
