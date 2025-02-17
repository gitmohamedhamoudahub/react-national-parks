import { useContext } from "react";
import  ParksContext  from "../context/ParksContext.jsx";

function ParkDetails() {
  const { parks, loading } = useContext(ParksContext);
    console.log("Fees - loading", loading);
  const loaded = () => (
<div className="parks-container-details">
  {parks.map((park) => (
    <div key={park.id} className="park-card">
      {/* Park Name */}
      <h2 className="park-name">{park.name}</h2>
      <p>🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻</p>
      {/* Park Images (Max 3) */}
      <div className="park-images">
        {park.images.slice(0, 5).map((img, index) => (
          <img key={index} className="park-image" src={img.url} alt={park.name} />
        ))}
      </div>
      <p>🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻</p>
      
      {/* Park Details */}
      <div className="park-details">
        <p><strong>📍 Location:</strong> {park.states}</p>
        <p><strong>🏠 Address:</strong> {park.addresses.length > 0 
          ? `${park.addresses[0].line1}, ${park.addresses[0].city}, ${park.addresses[0].stateCode}, ${park.addresses[0].postalCode}`
          : "No Address Available"}</p>
        
        {/* Activities */}
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

        {/* Entrance Fees */}
        <p><strong>💰 Entrance:</strong> 
          {park.entranceFees.length === 0 ? "🆓 Free" : (
            <table className="entrance-fees-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Cost ($)</th>
                </tr>
              </thead>
              <tbody>
                {park.entranceFees.map((fee, index) => (
                  <tr key={index}>
                    <td>{fee.title}</td>
                    <td>${fee.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </p>
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

 


  export default ParkDetails;