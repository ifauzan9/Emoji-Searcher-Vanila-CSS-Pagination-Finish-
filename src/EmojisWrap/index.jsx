import styles from './EmojisWrap.module.css';
import PropTypes from 'prop-types';
import EmojiBox from '../components/EmojiBox';
import { useEffect, useState } from 'react';
import { filteredEmojis } from '../utils/filteredEmojis';
import Paginate from '../components/Paginate';

const EmojisWrap = ({emojisData, searchText, searchMode, changeSearchMode}) => {    
    const [filterEmojis, setFilterEmojis] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(14);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const dataFilter = filteredEmojis({
            emojisData,
            searchText
        });

        const totalPage = Math.ceil(dataFilter.length/itemPerPage);        
        setTotalPages(totalPage);
        searchMode && setCurrentPage(1);
        
        const indexLastData = currentPage * itemPerPage;
        const indexFirstData = indexLastData - itemPerPage;        

        
        changeSearchMode();
        setFilterEmojis(dataFilter.slice(indexFirstData, indexLastData));
        

        
    }, [filteredEmojis, searchText, currentPage])   

    const changePage = (page) => {
        setCurrentPage(page);
    }

    
    
    return(
        <>
        {
            filterEmojis.length > 0 ? 
            <div className={styles.emojisWrap}>
            {
                filterEmojis.map((emoji, index, arr) => {                    
                    return (
                        <EmojiBox
                            symbol={emoji.symbol}
                            title={emoji.title}
                            key={index}                            
                        />
                    )                                                   
                })
            }             
            </div>    :
            "Kosong"
        }        
        <hr />
        <Paginate 
            totalPages={totalPages} 
            currentPage={currentPage} 
            changePage={changePage}                        
        />            
        </>
    )
}

EmojisWrap.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string
}

export default EmojisWrap;