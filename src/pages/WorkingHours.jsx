import { useContext } from "react";
import  ParksContext  from "../context/ParksContext.jsx";

function WorkingHours() {
  const { parks, loading } = useContext(ParksContext);
    console.log("WorkingHours - loading", loading);
  const loaded = () => (
    <div className="parks-container">
      {parks.map((park) => (
        <div key={park.id} className="park-card-WH">
          <img className="ImageC" src={park.images[1]?.url} alt={park.name}  />
          <div className="park-details">
            <h3>{park.name}</h3>
            <hr></hr>
            {/* <p>{park.states}</p> */}
            <table className="operating-hours-table">
  <thead>
    <tr>
      <th>Day</th>
      <th>Opening Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>{park.operatingHours[0].standardHours.monday}</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>{park.operatingHours[0].standardHours.tuesday}</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>{park.operatingHours[0].standardHours.wednesday}</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>{park.operatingHours[0].standardHours.thursday}</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>{park.operatingHours[0].standardHours.friday}</td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>{park.operatingHours[0].standardHours.saturday}</td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td>{park.operatingHours[0].standardHours.sunday}</td>
    </tr>
  </tbody>
</table>

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

  export default WorkingHours;