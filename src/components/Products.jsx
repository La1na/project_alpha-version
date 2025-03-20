import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styles from "../styles/Products.module.css";

const API_URL = "http://localhost:3333/";
const Products = () => {
  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();
  // searchParams.get("__firebase_request_key")
  const pageTitle = searchParams.get("category_title");
  // console.log(searchParams.get("category_title"));

  const categoryId = useParams().id;

  // console.log(useParams().id);

  useEffect(() => {
    axios
      .get(`${API_URL}products/all`)
      .then((response) => {
        console.log("id:", categoryId);
        console.log("all: ", response.data);

        console.log(
          "FILTERED: ",
          response.data.filter((item) => item.categoryId == categoryId)
        );

        setProducts(
          response.data.filter(
            (item) =>
              item.categoryId == (categoryId ? categoryId : item.categoryId)
          )
          //   .slice(0, 4)
        );
      })
      .catch((error) =>
        console.error("Ошибка при загрузке скидочных товаров:", error)
      );
  }, []);

  return (
    <section className={styles.products}>
      <div className={styles.products_container}>
        <h2 className={styles.heading}>
          {pageTitle ? pageTitle : "All Products"}
        </h2>
      </div>
      <div className={styles.filters}>
        <label htmlFor="price1">Price</label>
        <input type="text" id="price1" placeholder="from" />
        <input type="text" id="price2" placeholder="to" />
        <label htmlFor="discount">Discounted items</label>
        <input type="checkbox" id="discount" />
        <label htmlFor="sorted">Sorted</label>
        <select name="" id="sorted">
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
          <option defaultValue="default" >
            by default
          </option>
        </select>
      </div>

      <div className={styles.saleItems} >
        {products.length > 0 ? (
          products
            // .filter((item) => item.categoryId == categoryId)
            .map((item) => {
              return (
                <div key={item.id} className={styles.saleItem}>
                  <div className={styles.saleImageWrapper}>
                    <Link to={{ pathname: `/products/${item.id}` }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.saleImage}
                      />
                    </Link>
                  </div>
                  <p className={styles.saleTitle}>{item.title}</p>
                  <div className={styles.priceWrapper}>
                    <span className={styles.oldPrice}>${item.price}</span>
                  </div>
                </div>
              );
            })
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
};
export default Products;
