import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import styles from "../styles/Error.module.css"
import error from "../assets/404.png"

const Error = () =>{
    return(
        <div className={styles.error_all}>
            <img src={error} alt="error" />
            <h2>Page not found</h2>
            <p>We’re sorry, the page you requested could not be found.
            Please go back to the homepage.</p>
            <Link to="/">
            <button className={styles.homeBtn}>Go home</button>
            </Link>
        </div>
    )
}

export default Error