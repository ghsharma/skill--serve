import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot( document.getElementById("root")).render(

  <BrowserRouter>
      
  <Auth0Provider
    domain="dev-8d5fo7zjxgem8m20.us.auth0.com"
    clientId="WZDDD62oKD0Komti3QOit8hXkjo09v2q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App/>
  </Auth0Provider>
  
    </BrowserRouter>
 

);
