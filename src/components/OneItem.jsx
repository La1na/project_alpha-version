import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styles from "../styles/OneItem.module.css";

const API_URL = "http://localhost:3333/";
const OneItem = () => {
  const [oneItem, setOneItem] = useState([]);

  const itemId = useParams().id;

  useEffect(() => {
    axios
      .get(`${API_URL}products/${itemId}`)
      .then((response) => {
        console.log(response.data);

        setOneItem(response.data[0]);
      })
      .catch((error) =>
        console.error("Ошибка при загрузке скидочных товаров:", error)
      );
  }, []);

  const [buttonText, setButtontext] = useState("Add to cart");
  const handleClick = () => {
    let cart = JSON.parse( localStorage.getItem('cart')) ?JSON.parse( localStorage.getItem('cart')) : [];
    console.log(cart);
    
    cart.push(oneItem);
    console.log(cart);

    localStorage.setItem("cart", JSON.stringify( cart));
    setButtontext((prevText) =>
      prevText === "Add to cart" ? "Added" : "Add to cart"
    );
  };

  return (
    <section className={styles.products}>
      <div className={styles.saleItems}>
       
        <div key={oneItem.id} className={styles.saleItem}>
          <div className={styles.leftSide}>
            <div className={styles.saleImageWrapper}>
              
              <img
                src={oneItem.image}
                alt={oneItem.title}
                className={styles.saleImage}
              />
           
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.saleInfo}>
              <p className={styles.saleTitle}>{oneItem.title}</p>
              <div className={styles.priceWrapper}>
                <span className={styles.oldPrice}>${oneItem.price}</span>
              </div>

              <div className={styles.buttons}>
                <button className={styles.Add} onClick={handleClick}>
                  {buttonText}
                </button>
              </div>
              <div className={styles.description}></div>
              <h2>Description</h2>
              <p className={styles.text}>{oneItem.description}</p>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default OneItem;
