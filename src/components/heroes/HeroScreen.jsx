import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroesById(heroId)[0], [heroId]);

  // const hero = getHeroesById(heroId)[0];
  if (!hero) {
    return <Redirect to="/marvel" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="animate__animated animate__fadeIn col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group.flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publishe: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence: </b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
};
