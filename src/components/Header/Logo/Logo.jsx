import styles from './Logo.module.scss';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/" className={styles.header__logoTitle}>
      <img
        width={40}
        height={40}
        src="/assets/img/logo/logo.png"
        alt="react-sneakers-logo"
      />

      <div className={styles.title}>
        <span>REACT SNEAKERS</span>
        <p>Магазин лучших кроссовок</p>
      </div>
    </NavLink>
  );
};

export default Logo;
