import { DC_COMICS, MARVEL_COMICS } from "../constants/heroesTypes";
import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = [DC_COMICS, MARVEL_COMICS];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisheer "${publisher}" no es correcto`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
