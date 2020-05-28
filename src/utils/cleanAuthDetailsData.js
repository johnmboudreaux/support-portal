import moment from 'moment';

const cleanAuthDetailsData = {
  parseDateForStore: () => {
    return moment().format('YYYY-MM-DD HH:mm:sss');
  },
};

export default cleanAuthDetailsData;
