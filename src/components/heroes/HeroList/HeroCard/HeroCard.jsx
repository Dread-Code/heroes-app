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
    <div class="col">
      <div className="card" style={{ maxWidth: 540 }}>
        <Link to={`/hero/${id}`}>
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{superhero}</h5>
          <p class="card-text">
            <strong>Alter ego: </strong> {alter_ego}
          </p>
          {alter_ego !== characters && (
            <p className="card-text">
              <strong>Characters: </strong> {characters}
            </p>
          )}
          <p class="card-text">
            <strong style={{ fontSize: "2em" }}>{publisher}</strong>
            <br />
            <small class="text-muted">{first_appearance}</small>
          </p>
        </div>
      </div>
    </div>
  );
};
