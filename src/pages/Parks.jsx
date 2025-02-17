import { useContext } from "react";
import  ParksContext  from "../context/ParksContext.jsx";

function Parks() {
  const { parks, loading } = useContext(ParksContext);
    console.log("Parks - loading", loading);
  const loaded = () => (
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

  const loadingComponent = () => (
    <div className="loading-container">
      <h1>Loading...</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
        alt="Loading..."
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );

  return loading ? loadingComponent() : loaded();
}

export default Parks;
