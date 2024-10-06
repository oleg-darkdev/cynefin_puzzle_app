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
  // complicated.favoriteTools[0],
  // complex.favoriteTools[0],
  // chaotic.favoriteTools[0],
  // disorder.favoriteTools[0],

]
export {domains, promoToolsSet};
