
// practices
import adHoc from './practices/adHoc';
import ccs from './practices/ccs';
import rp from './practices/rp';
import сс from './practices/сс';
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';

// frameworks
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';
// import sop from './frameworks/standard_operating_procedure';


const chaoticDomain = {
  domain: 'Chaotic',
  anchor: 'chaotic-domain',
  shortDesc: 'В данном домене отсутствуют причинно-следственные связи, и ситуация является крайне непредсказуемой.',
  desc: [
      `В этом домене важно быстро действовать, чтобы восстановить порядок и предотвратить дальнейшие проблемы. Управление в хаосе требует немедленных действий и поиска краткосрочных решений, которые могут помочь перейти к более управляемым состояниям.`,
      `Для данного домена взято очень, очень много из армейских структур. Чтобы бы более понятнее почему - в нашей с вами жизни мы не часто попадаем в ситуации которые подходят под определение chaos по модели cynefin. От исхода этих ситуаций не зависит наша, или чьито ещё жизни - что очень часто случается в армейских структурах.`,

  ],
  brandColorText: 'chaos-domain-textColor',
  brandColorBg: 'chaos-domain-bgColor',
  align: 'r',
  promoImg: '/images/stable/chaotic_promoImg.svg',
  id: 1003,
  icon: '/images/domains/chaotic_icon.svg',
  link: '/',
  //  , , , , , , , , , , , , , , , , ,
  favoriteTools: [ adHoc, ccs, rp, сс],
  frameworks: [ ],
  practices: [ adHoc, ccs, rp, сс ],
  stats: [
    {
      title: 'Frameworks.',
      count: 0
    },
    {
      title: 'Practices.',
      count: 4
    },
  ],
  characteristics: {
    desc: '',
    values: [
      {
        title: 'Скорость действий',
        id: 0,
        desc: [`Главный акцент на быстрой реакции и принятии решений`]
      },
      {
        title: 'Непредсказуемость',
        id: 0,
        desc: [`Работают методы, направленные на уменьшение хаоса и восстановление порядка.`]
      },
      {
        title: 'Гибкость',
        id: 0,
        desc: [`Необходимо быть готовым к изменению планов в зависимости от ситуации`]
      },
      {
        title: 'Командная работа',
        id: 0,
        desc: [`Сильная координация и коммуникация между участниками`]
      },
      {
        title: 'Коллективный интеллект',
        id: 0,
        desc: [`Многие подходы предполагают вовлечение большого количества участников и использование коллективных знаний для нахождения решений.`]
      },

    ]
  }
};


export default chaoticDomain;







