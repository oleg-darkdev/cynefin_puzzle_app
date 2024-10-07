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
  complicated.favoriteTools[0],
  complex.favoriteTools[0],
  chaotic.favoriteTools[0],
  disorder.favoriteTools[0],
  simple.favoriteTools[1],
  complicated.favoriteTools[1],
  complex.favoriteTools[1],
  chaotic.favoriteTools[1],
  disorder.favoriteTools[1],
]
export {domains, promoToolsSet};
