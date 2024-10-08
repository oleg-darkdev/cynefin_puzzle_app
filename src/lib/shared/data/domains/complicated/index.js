
// practices
import rca from './practices/rca';
import bpm from './practices/bpm';
import sp from './practices/sp';
import cpm from './practices/cpm';
import ve from './practices/ve';
import fmea from './practices/fmea';
import pert from './practices/pert';
import vsm from './practices/vsm';
import pp from './practices/pp';
import mkm from './practices/mkm';
import dt from './practices/dt';
import toc from './practices/toc';
import cba from './practices/cba';
import st from './practices/st';
import scp from './practices/scp';
import benchmarking from './practices/benchmarking';
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';

// frameworks
import rmf from './frameworks/rmf';
import nrmf from './frameworks/nrmf';
import erm from './frameworks/erm';
import pmi from './frameworks/pmi';
import prince from './frameworks/prince';
import ddd from './frameworks/ddd';
import tps from './frameworks/tps';
import bs from './frameworks/bs';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';





const complicatedDomain = {
  domain: 'Сomplicated',
  anchor: 'complicated-domain',
  shortDesc: 'В сложном (Complicated) домене модели Cynefin причинно-следственные связи присутствуют, но их не всегда легко распознать. Чтобы принять решение, требуется экспертиза и глубокий анализ. В отличие от простого домена, здесь нет "лучших практик", но есть "хорошие практики", которые могут быть адаптированы к каждой уникальной ситуации. Методы в этом домене требуют аналитического подхода и привлечения экспертов для нахождения правильного решения.',
  desc: [
    '',
    '',
    '',
  ],
  brandColorText: 'complicated-domain-textColor',
  brandColorBg: 'complicated-domain-bgColor',
  align: 'r',
  promoImg: '/images/stable/complicated_promoImg.svg',
  id: 1001,
  icon: '/images/domains/complicated_icon.svg',
  link: '/',
  favoriteTools: [ erm, pmi, tps, fmea, toc],
  frameworks: [ rmf, nrmf, erm, pmi, prince, ddd, tps, bs],
  practices: [rca, bpm, sp, cpm, ve, fmea, pert, vsm, pp, mkm, dt, toc, cba, st, scp, benchmarking],
  stats: [
    {
      title: 'Frameworks.',
      count: 8
    },
    {
      title: 'Practices.',
      count: 16
    },
  ],
  characteristics: {
    desc: '',
    values: [
      {
        title: 'Аналитичность',
        id: 0,
        desc: [`В сложном домене требуется глубокий анализ и системное мышление.`]
      },
      {
        title: 'Экспертиза',
        id: 0,
        desc: [`Для принятия решений важна экспертиза в соответствующей области.`]
      },
      {
        title: 'Множественные пути решения',
        id: 0,
        desc: [`В сложных ситуациях может быть несколько возможных решений, и задача — выбрать оптимальное на основе данных и анализа.`]
      },
      {
        title: 'Многошаговые процессы',
        id: 0,
        desc: [`Подходы часто предполагают проведение нескольких этапов анализа и корректировки по мере продвижения к решению.`]
      },

    ]
  }
};





export default complicatedDomain;
