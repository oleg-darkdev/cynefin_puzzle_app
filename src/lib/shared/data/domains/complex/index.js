
// practices
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';
// import  from './practices/';
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
// import sop from './frameworks/standard_operating_procedure';





const complexDomain = {
  domain: 'Complex',
  shortDesc: 'В сложном (Complex) домене модели Cynefin причинно-следственные связи невозможно распознать заранее, так как системы динамичны, непредсказуемы и полны неопределённости. В этом домене управление требует экспериментов, изучения взаимосвязей и постоянной адаптации к изменениям.',
  desc: [
    'Решения часто не могут быть предсказаны заранее, и необходимо работать с процессами, которые "проявляют себя" через действия и наблюдения.',
    '',
    '',
  ],
  brandColorText: 'complex-domain-textColor',
  brandColorBg: 'complex-domain-bgColor',
  align: 'l',
  promoImg: '/images/domains/complex_promoImg.svg',
  id: 0,
  icon: '',
  link: '/',
  favoriteTools: [],
  frameworks: [ ],
  practices: [],
  stats: [
    {
      title: 'Frameworks.',
      count: 0
    },
    {
      title: 'Practices.',
      count: 0
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
