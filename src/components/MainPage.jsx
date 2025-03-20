import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/MainPage.module.css";
import pets from "../assets/image.svg";

const API_URL = "http://localhost:3333/";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [saleItems, setSaleItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}categories/all`)
      .then((response) => {
        setCategories(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Ошибка при загрузке категорий:", error);
      });
    axios
      .get(`${API_URL}products/all`)
      .then((response) => {
        console.log(
          "FILTERED: ",
          response.data.filter((item) => item.discont_price)
        );

        setSaleItems(
          response.data.filter((item) => item.discont_price).slice(0, 4)
        );
      })
      .catch((error) =>
        console.error("Ошибка при загрузке скидочных товаров:", error)
      );
  }, []);

  return (
    <div className={styles.container}>
      {/* Блок с баннером */}
      <section className={styles.banner}>
        <div className={styles.overlay}>
          <button className={styles.bannerButton}>Check out</button>
        </div>
      </section>

      {/* Секция "Categories" */}
      <section className={styles.categories}>
        {/* <h2>Categories</h2> */}
        <div className={styles.category_container}>
          <h2 className={styles.heading}>Categories</h2>
          <div className={styles.divider}></div>
          <Link to="/categories">
            <button className={styles.filterButton}>All categories</button>
          </Link>
          {/* <button className={styles.filterButton}>All categories</button> */}
        </div>
        <div className={styles.categoryList}>
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.id} className={styles.categoryItem}>
                <Link
                  to={{
                    pathname: `./categories/${category.id}`,
                    search: `?category_title=${category.title}`,
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className={styles.categoryImage}
                  />
                </Link>
                <p>{category.title}</p>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </section>

      {/* Секция "Discount" */}
      <section className={styles.discount}>
        <h2>5% off on the first order</h2>
        <div className={styles.bannerWrapper}>
          <div className={styles.petImg}>
            <img src={pets} alt="Promo Banner" className={styles.bannerImage} />
          </div>
          <form className={styles.discountForm}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone number" />
            <input type="email" placeholder="Email" />
            <button type="submit" className={styles.overlayButton}>
              Get a discount
            </button>
          </form>
        </div>
      </section>

      <section className={styles.sale}>
        <div className={styles.category_container}>
          <h2 className={styles.heading}>Sale</h2>
          <div className={styles.divider}></div>
          <Link to="/sales">
            <button className={styles.filterButton}>All sales</button>
          </Link>
        </div>
        <div className={styles.saleItems}>
          {saleItems.length > 0 ? (
            saleItems
              .filter((item) => item.discont_price !== null)
              .slice(0, 4)
              .map((item) => {
                const discount = Math.round(
                  ((item.price - item.discont_price) / item.price) * 100
                );
                return (
                  <div key={item.id} className={styles.saleItem}>
                    <div className={styles.saleImageWrapper}>
                      <Link
                        to={{
                          pathname: `./products/${item.id}`
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.saleImage}
                        />
                      </Link>
                      {discount > 0 && (
                        <span className={styles.discountBadge}>
                          -{discount}%
                        </span>
                      )}
                    </div>

                    <p className={styles.saleTitle}>{item.title}</p>

                    <div className={styles.priceWrapper}>
                      <span className={styles.salePrice}>
                        ${item.discont_price}
                      </span>
                      <span className={styles.oldPrice}>${item.price}</span>
                    </div>
                  </div>
                );
              })
          ) : (
            <p>No discounted products available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
