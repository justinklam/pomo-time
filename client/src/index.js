import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React Redux
import { Provider } from "react-redux";
import { persistor, store } from "./components/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
