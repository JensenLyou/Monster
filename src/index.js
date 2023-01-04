import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.less';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/index";
import Root from './router/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
