import styles from './Paginate.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

const Paginate = ({totalPages, currentPage, changePage}) => {  
    const [arrayPagesNumber, setArrayPagesNumber] = useState([]);
    const [firstNumber, setFirstNumber] = useState(1);
    const [lastNumber, setLastNumber] = useState(7);
    
    useEffect(() => {
        const arrayPages = function(){
            let allPages = [];
            for (let i = 1; i <= totalPages; i++) {
                allPages.push(i);
            }
            
            return allPages;    
        }   

        if(totalPages !== arrayPagesNumber.length){
            setFirstNumber(1);
            setLastNumber(7);
        }
        
        setArrayPagesNumber(arrayPages());
    }, [totalPages, currentPage]);

    const handleLowerPage = () => {
        setFirstNumber((e) => {            
            return e - 1;
        })
        setLastNumber((e) => {
            return e - 1;
        })
    }
    
    const handleGreaterPage = () => {
        setFirstNumber((e) => {            
            return e + 1;
        })
        setLastNumber((e) => {
            return e+1;
        })
    }

    return(
        <nav className={styles.paginationWrap}>
            <ul className={styles.pagin}>
            {
                firstNumber > 1 ? 
                    <button onClick={() => handleLowerPage()} className={styles.lower}>&lt;</button> : 
                    <button style={{"backgroundColor": "gray"}} className={styles.lower} disabled>&lt;</button>
            }            
            {
                arrayPagesNumber.map((page,index) => {
                    if(page >= firstNumber && page <= lastNumber){
                        return (
                            <li 
                                className={classnames(styles.list, {
                                    [styles.active]: page === currentPage
                                })} 
                                onClick={() => changePage(page)}
                                key={index}
                            >
                                {page}
                            </li>                
                        )
                    }
                })
            }
            {
                lastNumber < totalPages ? 
                <button onClick={() => handleGreaterPage()} className={styles.greater}>&gt;</button> :
                <button style={{"backgroundColor": "gray"}}  className={styles.greater} disabled>&gt;</button>
            }            
            </ul>
        </nav>
    )
}

Paginate.propTypes = {
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    changePage: PropTypes.func
}

export default Paginate;