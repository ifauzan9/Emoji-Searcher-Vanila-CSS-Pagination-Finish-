import styles from './Search.module.css';
import PropTypes from 'prop-types';

const Search = ({value, onChange}) => {
    return(
        <div className={styles.searchWrap}>
            <input 
                type="text" 
                placeholder='Search'
                className={styles.searchText}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Search;