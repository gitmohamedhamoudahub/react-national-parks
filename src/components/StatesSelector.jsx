import States from '../data/states.js';

function StateSelector({ selectedState, onChange }) {
  return (
    <select className="ddlStates" value={selectedState} onChange={onChange}>
      {States.map((state) => (
        <option key={state.code} value={state.code}>{state.name}</option>
      ))}
    </select>
  );
}

export default StateSelector;
