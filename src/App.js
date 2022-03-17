import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, FormContact } from './pages'
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='layout'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-contact" element={<FormContact />} />
          <Route path="edit-contact/:id" element={<FormContact />} />
        </Routes>
        <ToastContainer limit={1} />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App