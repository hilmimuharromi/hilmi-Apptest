import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, AddContact } from './pages'
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='layout'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-contact" element={<AddContact />} />
        </Routes>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App