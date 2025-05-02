import "./FilterCountries.scss";

const FilterCountries = ({ onChangeCountry }) => {
  return (
    <div className="aob-filter">
      <div className="aob-filter__text">Or filter</div>
      <button
        onClick={() => {
          onChangeCountry("Brazil");
        }}
        className="aob-filter__btn"
      >
        Brazil
      </button>
      <button
        onClick={() => {
          onChangeCountry("Kenya");
        }}
        className="aob-filter__btn"
      >
        Kenya
      </button>
      <button
        onClick={() => {
          onChangeCountry("Columbia");
        }}
        className="aob-filter__btn"
      >
        Columbia
      </button>
      <button
        onClick={() => onChangeCountry("All")}
        className="aob-filter__btn"
      >
        All
      </button>
    </div>
  );
};

export default FilterCountries;
