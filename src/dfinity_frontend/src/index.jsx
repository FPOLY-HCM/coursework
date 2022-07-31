import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {
  AstroX,
  defaultProviders,
  PlugWallet,
} from '@connect2ic/core/providers';
import { createClient } from '@connect2ic/core';
import { Connect2ICProvider } from '@connect2ic/react';
import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Customers from './routes/Customers';
import * as coursework from '../../declarations/dfinity_backend';
import Edit from './routes/Customers/Edit';
import Create from './routes/Customers/Create';

const client = createClient({
  providers: [new AstroX(), new PlugWallet()],
  canisters: {
    coursework,
  },
  providers: defaultProviders,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Connect2ICProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="customers" element={<Customers />} />
            <Route path="customers/create" element={<Create />} />
            <Route path="customers/edit" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Connect2ICProvider>
  </React.StrictMode>
);
