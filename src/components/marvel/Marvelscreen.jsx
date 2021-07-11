import React from "react";
import { MARVEL_COMICS } from "../../constants/heroesTypes";
import { HeroList } from "../heroes/HeroList/HeroList";

export const Marvelscreen = () => {
  return (
    <div>
      <h1>Marvelscreen</h1>
      <hr />
      <HeroList publisher={MARVEL_COMICS} />
    </div>
  );
};
