import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col">
      <div className="card" style={{ maxWidth: 540 }}>
        <Link to={`/hero/${id}`}>
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">
            <strong>Alter ego: </strong> {alter_ego}
          </p>
          {alter_ego !== characters && (
            <p className="card-text">
              <strong>Characters: </strong> {characters}
            </p>
          )}
          <p className="card-text">
            <strong style={{ fontSize: "2em" }}>{publisher}</strong>
            <br />
            <small className="text-muted">{first_appearance}</small>
          </p>
        </div>
      </div>
    </div>
  );
};
