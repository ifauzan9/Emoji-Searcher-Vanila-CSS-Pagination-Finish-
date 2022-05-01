import styles from './Navbar.module.css';

import emojiIcon from '../../assets/emoji-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <img className={styles.iconNav} src={emojiIcon} alt="emoji icon" />
            <img className={styles.iconNav} src={searchIcon} alt="search icon" />
            <p className={styles.titleNav}>er</p>
        </div>
    )
}

export default Navbar;