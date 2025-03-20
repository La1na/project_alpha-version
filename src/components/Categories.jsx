import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import styles from "../styles/Categories.module.css"


const API_URL = "http://localhost:3333/";
const Categories =() =>{
    const [categories, setCategories] = useState([]);

    

  useEffect(() => {
    axios
      .get(`${API_URL}categories/all`)
      .then((response) => {
        setCategories(response.data); 
      })
      .catch((error) => {
        console.error("Ошибка при загрузке категорий:", error);
      });
  }, []);

  return(
<section className={styles.categories}>
        {/* <h2>Categories</h2> */}
        <div className={styles.category_container}>
      <h2 className={styles.heading}>Categories</h2>
      {/* <div className={styles.divider}></div>
      <Link to="/categories"><button className={styles.filterButton}>All categories</button></Link> */}
      {/* <button className={styles.filterButton}>All categories</button> */}
    </div>
        <div className={styles.categoryList}>
          {categories.length > 0 ? (
            categories.map((category) => (
                <div key={category.id} className={styles.categoryItem}>
                  <Link to={{pathname:`./${category.id}`, search: `?category_title=${category.title}`}}>   
                  {/* <Link to={`${API_URL}categories/${category.id}`}> */}
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

  );
};
export default Categories;