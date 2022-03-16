import React from 'react'
import { Routes, Route} from "react-router-dom";
import {Home, AddContact} from './pages'
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-contact" element={<AddContact />} />
    </Routes>
  )
}

export default App