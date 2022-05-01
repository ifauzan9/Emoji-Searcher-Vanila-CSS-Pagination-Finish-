import axios from 'axios';
import {useState, useEffect} from 'react'
import Container from './components/Container';
import Navbar from './components/Navbar';
import Paginate from './components/Paginate';
import Search from './components/Search';
import EmojisWrap from './EmojisWrap';

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading]  = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    async function getEmojisData(){
      setLoading(true);
      try{
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28');
        setEmojisData(res.data);        
        setLoading(false);        
      }catch(error){
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }

    getEmojisData();
    
  }, []);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    setSearchMode(true);
  }    
    
  return (
    <div>
      <Navbar />
      <Container>
        <Search 
          value={searchText}
          onChange={(e) => handleSearchText(e)}
        />    
        {loading && <p>Loading...</p> }
        {error && <p>Error</p> }        
        {(emojisData.length > 0 && !loading) && (
          <>
            <EmojisWrap 
              emojisData={emojisData} 
              searchText={searchText} 
              searchMode={searchMode}
              changeSearchMode={() => setSearchMode(false)}  
            />             
          </>
          )        
        }                
      </Container>
    </div>
  );
}

export default App;
