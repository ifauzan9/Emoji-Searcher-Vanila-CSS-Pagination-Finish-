import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import styles from './Container.module.css';

const Container = ({children}) => {
    return(
        <div className={styles.containerWrap}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;