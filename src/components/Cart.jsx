import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styles from "../styles/Cart.module.css";

const API_URL = "http://localhost:3333/";
const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);

  let order = {
    name: "",
    email: "",
    phone: "",
    totalItems: 0,
    totalPrice: 0,
    products: [],
  };

  return (
    <section className={styles.cart}>
      <div className={styles.products_container}>
        <h2 className={styles.heading}> Shopping cart </h2>
        {console.log(products)}
        <div className={styles.all_order}>
          <div className={styles.all_left}>
            {products.map((elem) => {
              order.totalItems += 1;
              order.totalPrice += elem.discont_price
                ? elem.discont_price
                : elem.price;
              order.products.push(elem);
              return (
                <div key={elem.id} className={styles.saleItem}>
                  <div className={styles.leftSide}>
                    <div className={styles.saleImageWrapper}>
                      <img
                        src={elem.image}
                        alt={elem.title}
                        className={styles.saleImage}
                      />
                    </div>
                  </div>
                  <div className={styles.rightSide}>
                    <div className={styles.saleInfo}>
                      <p className={styles.saleTitle}>{elem.title}</p>
                      <div className={styles.priceWrapper}>
                        <div className={styles.inputWithButton}>
                          <button>-</button>
                          <input type="text" defaultValue={1} />
                          <button>+</button>
                        </div>
                        <span className={styles.discountBadge}>
                          $
                          {elem.discont_price ? elem.discont_price : elem.price}
                        </span>
                    
                        <span className={styles.oldPrice}>
                          ${elem.discont_price ? elem.price : ""}
                        </span>
                     
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.order_side}>
            <div className={styles.order_middle}>
              <h2>Order details</h2>
              <div className={styles.order_title}>
                <h2>{order.totalItems} items </h2>
                <h2>total ${order.totalPrice}</h2>
              </div>
              <div className={styles.order_input}>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => (order.name = e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  onChange={(e) => (order.phone = e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => (order.email = e.target.value)}
                />
                <button onClick={(e) => {
                    handleClick(order);
                    setProducts([]);
                    }}>Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const handleClick = (order) => {
  axios
  .post(`${API_URL}order/send`, order)
  .then((response) => {
    localStorage.removeItem('cart')
  })
  .catch((error) =>
    console.error("Ошибка при загрузке скидочных товаров:", error)
  );
};

export default Cart;
