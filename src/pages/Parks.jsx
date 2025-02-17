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
            <div><strong>🎯 Activities:</strong></div>
        <div className="activities-container">
          {park.activities.length > 0 
            ? park.activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  {activity.name}
                </div>
              )) 
            : <div>No Activities Listed</div>}
        </div>

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
