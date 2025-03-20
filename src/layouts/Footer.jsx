import { MdLocationOn, MdPhone } from "react-icons/md";
import InstagramIcon from "../assets/ic-instagram.png";
import WhatsappIcon from "../assets/ic-whatsapp.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
     
        <div className={styles.column}>
          <div className={styles.fullWidth}>
            <h3 className={styles.sectionTitle}>Phone</h3>
            <p className={styles.contactItem}>
              <MdPhone className={styles.icon} /> +49 30 915-88492
            </p>
          </div>

          <div className={styles.fullWidth}>
            <h3 className={styles.sectionTitle}>Address</h3>
            <p className={styles.contactItem}>
              <MdLocationOn className={styles.icon} /> Wallstraße 9-13, 10179 Berlin, Deutschland
            </p>
          </div>
        </div>

 
        <div className={styles.column}>
          <div className={styles.halfWidth}>
            <h3 className={styles.sectionTitle}>Socials</h3>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className={styles.socialIcon} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <img src={WhatsappIcon} alt="WhatsApp" className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.halfWidth}>
            <h3 className={styles.sectionTitle}>Working Hours</h3>
            <p className={styles.workHours}>24 hours a day</p>
          </div>
        </div>

     
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.691!2d13.4032!3d52.5117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1a6f1a3e01%3A0x8b5e3a2c66e2a4e0!2sWallstraße%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1649252542045!5m2!1sen!2sde"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
