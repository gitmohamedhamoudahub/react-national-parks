import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Parks(props) {
    
// ----------------------------------------------------------------
  const API_KEY = import.meta.env.VITE_API_KEY;
  const apiKey = API_KEY;
  const params = useParams()
  const { stateCode } = useParams();
  

  const [url, setURL] = useState('');
  const [parks, setParks] = useState([]);  // Initialize parks as an empty array
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    const newURL = `https://developer.nps.gov/api/v1/parks?limit=12&statecode=${stateCode}&api_key=${apiKey}`;
    setURL(newURL);  
  }, [stateCode]);  
  

  const getParks = async () => {
    try {
      setLoadingState((loadingState)=> loadingState = true);
      const response = await fetch(url);
      const data = await response.json();
      console.log('data => ',data);
      setParks(data.data);
      setLoadingState((loadingState)=> loadingState = false);
    } catch(e) {
        
      console.error(e)
      setLoadingState((loadingState)=> loadingState = false);
    }
  };
  useEffect(() => {
    if (url) {getParks();}}, [url]);


    const loaded = () => {
        return (
          <div className="parks-container">
            {parks.map((park) => (
              <div key={park.id} className="park-card">
                <img src={park.images[0]?.url} alt={park.name} className="park-image" />
                <div className="park-details">
                  <h3>{park.name}</h3>
                  <p>{park.states}</p>
                  <p>ID: {park.id}</p>
                </div>
              </div>
            ))}
          </div>
        );
      };
      
const loading = () => (
    <div className="loading-container">
      <h1>Loading.....</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
        alt="Loading..."
        style={{ width: '50px', height: '50px' }}
      />
    </div>
  );
    
// ----------------------------------------------------------------
return loadingState  ?   loading() : loaded();
    

  }

  
    export default Parks;