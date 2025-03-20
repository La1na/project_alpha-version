import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import basketEmpty from "../assets/basket=empty.png";
import styles from "../styles/Header.module.css";

const Header = () => {

  let count = JSON.parse(localStorage.getItem('cart')).length ?? 0;
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/products">All products</Link></li>
            <li><Link to="/sales">All sales</Link></li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <Link to="/cart">
            <img src={basketEmpty} alt="Cart" />
           {count >0 && <span>{count} </span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
