import styles from "./css_style.module.css";
import reactImg from "../../assets/react.svg";
const Header = () => {
  const attributes = ["Home", "Quote", "Resturants", "Foods", "Contact"];
  return (
    <section className={styles.heroSection}>
      <nav style={{ backgroundColor: "#111827", color: "#fff" }}>
        <section className={styles.logoSection}>
          <img src={reactImg} alt="" />
          <h1>GeekFoods</h1>
        </section>
        <section>
          <ul className={styles.attributes}>
            {attributes.map((event, index) => (
              <li key={index} className={styles.list}>
                {event}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <button className={styles.btn1}>Get Started</button>
        </section>
      </nav>

      <section>
        <h2 className={styles.heroHeading1}>Let us find your</h2>
        <h2 className={styles.heroHeading2}><strong>Forever Food.</strong></h2>
        <p className={styles.Para}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="heroButton">
          <button className={styles.searchBtn}>Search Now</button>
          <button className={styles.knowBtn}>Know more</button>
        </div>
      </section>
    </section>
  );
};

export default Header;
