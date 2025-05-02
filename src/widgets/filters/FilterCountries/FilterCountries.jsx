import "./FilterCountries.scss";

const FilterCountries = () => {
  return (
    <div className="aob-filter">
      <div className="aob-filter__text">Or filter</div>
      <button
        onClick={() => {
          handleFilter("Brazil");
        }}
        className="aob-filter__btn"
      >
        Brazil
      </button>
      <button
        onClick={() => {
          handleFilter("Kenya");
        }}
        className="aob-filter__btn"
      >
        Kenya
      </button>
      <button
        onClick={() => {
          handleFilter("Columbia");
        }}
        className="aob-filter__btn"
      >
        Columbia
      </button>
      <button onClick={() => handleFilter("All")} className="aob-filter__btn">
        All
      </button>
    </div>
  );
};

export default FilterCountries;
