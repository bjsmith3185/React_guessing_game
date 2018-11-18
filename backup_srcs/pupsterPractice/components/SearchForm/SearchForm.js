import React from "react";
import "./SearchForm.css";


const SearchForm = props => (
  <form>
    <div className="form-group">
      <label className="label-title text-center">Search:</label>

      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        list="breeds"
        type="text"
        className="form-control"
        placeholder="Type in a dog breed to begin"
        id="breed"
      />


      <datalist id="breeds">
        {props.list.map(breed => <option value={breed} key={breed} />)}
      </datalist>

      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
