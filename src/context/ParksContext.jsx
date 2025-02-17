import { createContext, useState, useEffect } from "react";

const ParksContext = createContext();

export const ParksProvider = ({ children }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [stateCode, setStateCode] = useState("NC"); // Default state
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getParks = async (selectedState) => {
    setLoading(true);
    try {
      const url = `https://developer.nps.gov/api/v1/parks?limit=12&statecode=${selectedState}&api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setParks(data.data || []);
    } catch (error) {
      console.error("Error fetching parks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getParks(stateCode);
  }, [stateCode]);

  const getAllParkImages = () => {
    return parks.flatMap(park => park.images.map(image => image.url));
  };

  return (
    <ParksContext.Provider value={{ parks, loading, stateCode, setStateCode,getAllParkImages }}>
      {children}
    </ParksContext.Provider>
  );
};

export default ParksContext;
