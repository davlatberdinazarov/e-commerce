import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import ProductDetail from "./pages/ProductDetail"

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage/>} />
            <Route path="/product/:productId" element={<ProductDetail/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
   )
}

export default App
