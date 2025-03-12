import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import "../src/styles/style.css"

//page

import Home from "./pages/home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user/18" />} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="/user/:id/activity" element={<Home />} />
        <Route path="/user/:id/average-sessions" element={<Home />} />
        <Route path="/user/:id/performance" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
