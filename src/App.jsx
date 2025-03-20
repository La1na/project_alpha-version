import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import MainPage from "./components/MainPage";
import Categories from "./components/Categories";
import Products from "./components/Products";
import OneItem from "./components/OneItem";
import Cart from "./components/Cart";
import Error from "./components/Error";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<OneItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sales" element={<Products />} />
          <Route path="*" element={<Error/>} />
        </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
