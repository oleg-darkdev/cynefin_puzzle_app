
// practices
import sl from './practices/sl_scripting_language';
import checklist from './practices/checklist';
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
import sop from './frameworks/sop-standard_operating_procedure';
import six_sigma from './frameworks/six_sigma';
import tqm from './frameworks/tqm_total_quality_management';
import iso from './frameworks/iso';
import sla from './frameworks/sla-service_level_agreement';
import qc from './frameworks/qc_quality_control';
import fiveS from './frameworks/5s';
import waterfall from './frameworks/waterfall';
import rpa from './frameworks/rpa_obotic_process_automation';
import sbs from './frameworks/sbs_step_by_Step';
import sms from './frameworks/sms_safety_management_system';
// import sop from './frameworks/standard_operating_procedure';





const simpleDomain = {
  domain: 'Simple',
  shortDesc: 'В простом или очевидном домене (Clear/Obvious/Simple) модели Cynefin управляемые задачи характеризуются прямой и легко идентифицируемой связью между причиной и следствием. В этом домене задачи являются рутинными и предсказуемыми, и для их решения применяются стандартные подходы, проверенные временем.',
  desc: [
    '',
    '',
    '',
  ],
  brandColorText: 'simple-domain-textColor',
  brandColorBg: 'simple-domain-bgColor',
  align: 'l',
  promoImg: '/images/domains/sipmle_promoImg.svg',
  id: 1000,
  icon: '',
  link: '/',
  favoriteTools: [ tqm,  sla, waterfall], // six_sigma,
  frameworks: [ sop, six_sigma, tqm, iso, sla, qc, fiveS, waterfall, rpa, sbs, sms,  ],
  practices: [sl, checklist],
  stats: [
    {
      title: 'Frameworks.',
      count: 11
    },
    {
      title: 'Practices.',
      count: 2
    },
  ],
  characteristics: {
    desc: 'Общие характеристики подходов для простого домена:',
    values: [
      {
        title: 'Простота и предсказуемость',
        id: 0,
        desc: [`Все подходы предполагают выполнение стандартных, заранее определённых действий.`]
      },
      {
        title: 'Фокус на стандартах',
        id: 0,
        desc: [`Основное внимание уделяется соблюдению уже установленных стандартов, процедур и лучших практик`]
      },
      {
        title: 'Минимальная адаптивность',
        id: 0,
        desc: [`В этих методах не требуется адаптации решений под конкретные условия — достаточно следовать проверенным процессам`]
      },
    ]
  }
};


export default simpleDomain;
