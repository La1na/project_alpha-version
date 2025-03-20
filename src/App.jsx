import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import MainPage from "./components/MainPage";
// import Categories from "./pages/Categories";
// import Products from "./pages/Products";
// import Sales from "./pages/Sales";
// import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
