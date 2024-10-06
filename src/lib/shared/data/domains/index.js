import simple from "./simple";
import complicated from "./complicated";
import complex from "./complex";
import chaotic from "./chaotic";

const domains = {
  all: [
    simple,
    complicated,
    complex,
    chaotic
  ],
  simple,
  complicated,
  complex,
  chaotic
}

const promoToolsSet = [
  simple.favoriteTools[0],
  // complicated.favoriteTools[0],
  // complex.favoriteTools[0],
  // chaotic.favoriteTools[0],
]
export {domains, promoToolsSet};
