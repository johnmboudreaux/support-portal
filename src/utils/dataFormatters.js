import moment from 'moment';

const dataFormatters = {
  parseDateForStore: () => {
    return moment().format('YYYY-MM-DD HH:mm:sss');
  },
};

export default dataFormatters;
