
// practices
import mp from './practices/mp';
import cem from './practices/cem';
import ra from './practices/ra';
import fragmentation from './practices/fragmentation';
import facilitation from './practices/facilitation';
import cr from './practices/cr';
import сс from './practices/сс';
import cor from './practices/cor';
import sm from './practices/sm';
// import  from './practices/';

// frameworks
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';





const disorderDomain = {
  domain: 'Disorder',
  anchor: 'disorder-domain',

  shortDesc: 'W tym przypadku mamy do czynienia z sytuacją, w której nie jest od razu jasne, do której z pozostałych czterech domen (prostej, złożonej, złożonej lub chaosu) ona należy. Jest to stan pośredni, w którym nie ma jasnego zrozumienia, jakie działania należy podjąć, a wyzwaniem jest jak najszybsze skategoryzowanie problemu i wybranie odpowiedniego podejścia.',
  // shortDesc: 'В этом омене мы имеем дело с ситуацией, где невозможно сразу понять, к какому из других четырех доменов (простого, сложного, сложного или хаоса) она относится. Это промежуточное состояние, в котором нет ясного понимания того, какие действия предпринять, и задача состоит в том, чтобы как можно скорее классифицировать проблему и выбрать соответствующий подход.',
  desc: [
    'Разные заинтересованные стороны могут пытаться применить привычные для себя подходы: Бизнес-аналитики могут искать сложные решения, операционные менеджеры могут пытаться внедрить простые процессы.',
    'Основная задача в домене Disorder: Быстро прояснить, к какому домену относится ситуация (Clear, Complicated, Complex или Chaos), и выбрать соответствующий подход.'
  ],
  brandColorText: 'disorder-domain-textColor',
  brandColorBg: 'disorder-domain-bgColor',
  align: 'l',
  promoImg: '/images/stable/disorder_promoImg.svg',
  id: 1003,
  icon: '/images/domains/disorder_icon.svg',
  link: '/',
  favoriteTools: [ cor, сс, cr, cem, ra ],
  frameworks: [ ],
  practices: [  sm, cor, сс, cr, facilitation, fragmentation, ra, cem, mp ],
  stats: [
    {
      title: 'Frameworks.',
      count: 0
    },
    {
      title: 'Practices.',
      count: 9
    },
  ],
  characteristics: {
    desc: '',
    values: [
      {
        title: 'Неопределенность',
        id: 0,
        desc: [`Нет четкого понимания того, что происходит`]
      },
      {
        title: 'Отсутствие классификации',
        id: 0,
        desc: [`Неясно, какой подход или метод применить`]
      },
      {
        title: '',
        id: 0,
        desc: [``]
      },

    ]
  }
};


export default disorderDomain;







