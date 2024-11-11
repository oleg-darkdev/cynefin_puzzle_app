
// practices
import ar from './practices/ar';
import pd from './practices/pd';
import сrowdsourcing from './practices/сrowdsourcing';
import ai from './practices/ai';
import ci from './practices/ci';
import pp from './practices/pp';
import bdd from './practices/bdd';
import atdd  from './practices/atdd';
import so from './practices/so';
import sna from './practices/sna';
import ni from './practices/ni';
import dt from './practices/dt';
import sensemaking from './practices/sensemaking';
import cynefin from './practices/cynefin';
import at from './practices/at';
import em from './practices/em';
import xp from './practices/xp';
import agile from './practices/agile';
import er from './practices/er';
import plp from './practices/plp';
import retrospective from './practices/retrospective';
import timeboxing from './practices/timeboxing';
import us from './practices/us';
import velocity from './practices/velocity';
// import er from './practices/er';



// frameworks
import theory_u from './frameworks/theory_u';
import cas from './frameworks/cas';
import holacracy from './frameworks/holacracy';
import scrum from './frameworks/scrum';
import scrumban from './frameworks/scrumban';
import kanbanDev from './frameworks/kanbanDev';
import leanStartup from './frameworks/leanStartup';
import leanDen from './frameworks/leanDen';
import fdd from './frameworks/fdd';
import leanM from './frameworks/leanM';
import asd from './frameworks/asd';
import am from './frameworks/am';
import aup from './frameworks/aup';
import dad from './frameworks/dad';
import dsdm from './frameworks/dsdm';
import rad from './frameworks/rad';
import idd from './frameworks/idd';
import sbe from './frameworks/sbe';
import sdm from './frameworks/sdm';
import es from './frameworks/es';
import xfn from './frameworks/xfn';
// import idd from './frameworks/idd';
// import idd from './frameworks/idd';
// import idd from './frameworks/idd';


const complexDomain = {
  domain: 'Complex',
  anchor: 'complex-domain',
  shortDesc: 'W złożonej domenie modelu Cynefin związki przyczynowo-skutkowe nie mogą być rozpoznane z wyprzedzeniem, ponieważ systemy są dynamiczne, nieprzewidywalne i pełne niepewności. W tej domenie zarządzanie wymaga eksperymentowania, badania relacji i ciągłego dostosowywania się do zmian.',
  // shortDesc: 'В сложном (Complex) домене модели Cynefin причинно-следственные связи невозможно распознать заранее, так как системы динамичны, непредсказуемы и полны неопределённости. В этом домене управление требует экспериментов, изучения взаимосвязей и постоянной адаптации к изменениям.',
  desc: [
    'Решения часто не могут быть предсказаны заранее, и необходимо работать с процессами, которые "проявляют себя" через действия и наблюдения.',
    '',
    '',
  ],
  brandColorText: 'complex-domain-textColor',
  brandColorBg: 'complex-domain-bgColor',
  align: 'l',
  promoImg: '/images/stable/complex_promoImg.svg',
  id: 1002,
  icon: '/images/domains/complex_icon.svg',
  link: '/',
  // ,
  favoriteTools: [ agile,  fdd, aup, sbe,  xp],
  frameworks: [ theory_u, cas, holacracy, agile, scrum, scrumban, kanbanDev, leanStartup, leanDen, fdd, leanM,  asd, am, cynefin, aup, rad, dsdm, dad, idd, sbe, sdm, es, xfn ],
  practices: [velocity, us, timeboxing, retrospective, plp, em, er, at, sensemaking, dt, ni, sna, so, atdd, bdd, pp, ci, xp, ai, сrowdsourcing, ar, pd],
  stats: [
    {
      title: 'Frameworks.',
      count: 24
    },
    {
      title: 'Practices.',
      count: 22
    },
  ],
  characteristics: {
    desc: '',
    values: [
      {
        title: 'Эксперименты и итерации.',
        id: 0,
        desc: [`Основной принцип работы с системами, которые постоянно меняются.`]
      },
      {
        title: 'Ориентация на адаптацию.',
        id: 0,
        desc: [`Вместо попыток предсказать результат, подходы в сложном домене направлены на быстрое реагирование на возникающие изменения.`]
      },
      {
        title: 'Работа с неопределенностью.',
        id: 0,
        desc: [`Методы направлены на выявление скрытых паттернов и понимание динамики системы по мере её проявления.`]
      },

    ]
  }
};


export default complexDomain;
