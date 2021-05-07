import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
      domain="agilitek.us.auth0.com"
      clientId="Pn08OIuU2lNszAFLD4WZlelkOIdhwmVu"
      redirectUri="http://localhost:3000/"
      returnTo="http://localhost:3000/"
      audience="https://agilitek.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );