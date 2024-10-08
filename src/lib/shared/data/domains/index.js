import simple from "./simple";
import complicated from "./complicated";
import complex from "./complex";
import chaotic from "./chaotic";
import disorder from "./disorder";

const domains = {
  all: [
    simple,
    complicated,
    complex,
    chaotic,
    disorder
  ],
  simple,
  complicated,
  complex,
  chaotic,
  disorder
}



const promoToolsSet = [
  simple.favoriteTools[0],
  complicated.favoriteTools[2],
  complex.favoriteTools[0],
  chaotic.favoriteTools[0],
  simple.favoriteTools[2],
  complicated.favoriteTools[1],
  // complex.favoriteTools[3],
  chaotic.favoriteTools[1],
  simple.favoriteTools[1],
  complicated.favoriteTools[2],
  chaotic.favoriteTools[2],
  simple.favoriteTools[2],
  complicated.favoriteTools[2],
  // complex.favoriteTools[2],
  chaotic.favoriteTools[2],]
export {domains, promoToolsSet};
