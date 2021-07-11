import React from "react";
import { DC_COMICS } from "../../constants/heroesTypes";
import { HeroList } from "../heroes/HeroList/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1>DcScreen</h1>
      <hr />
      <HeroList publisher={DC_COMICS} />
    </div>
  );
};
