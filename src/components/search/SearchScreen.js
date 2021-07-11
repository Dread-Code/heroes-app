import React, { useMemo } from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroList/HeroCard/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = parse(location.search);

  const [values, handleInputChange, reset] = useForm({
    search: "",
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${values.search}`);
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

          {q === "" ? (
            <div className="alert alert-info">Search a hero</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">
                There is no a hero with {q}
              </div>
            )
          )}

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
