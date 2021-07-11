import React from "react";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroList/HeroCard/HeroCard";

export const SearchScreen = () => {
  const heroesFiltered = heroes;

  const [values, handleInputChange, reset] = useForm({
    search: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(values);
    reset();
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              className="form-control"
              onChange={handleInputChange}
              value={values.search}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="animate__animated animate__fadeIn row row-cols-1 row-cols-md-2 g-4"
            style={{}}
          >
            {heroesFiltered.map((hero) => (
              <HeroCard {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
