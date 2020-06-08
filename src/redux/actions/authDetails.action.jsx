import * as types from '../actions/actionTypes.js';

export const startAuthDetailCall = (formattedDate) => {
  return {
    type: types.LOAD_CHANGED_DATE_OF_VISIT,
    isFetching: true,
    formattedDate,
  };
};

export const saveAuthDetailsFail = () => {
  return {
    type: types.SAVE_AUTH_DETAILS_FAIL,
    isFetching: false,
  };
};

export const saveAuthDetailsSuccess = () => {
  return {
    type: types.SAVE_AUTH_DETAILS_SUCCESS,
    isFetching: false,
  };
};

export const saveAuthDetails = (date) => {
  const bodyData = {
    date,
  };
  const fakeFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: 'success',
      });
      // reject({
      //   status: 500,
      //   message: 'Error: Fake request error',
      //   error: 'Did not work (fake request)',
      // });
    }, 1500);
  });

  return (dispatch) => {
    dispatch(startAuthDetailCall(date));
    // return fetch('/authorization.json', {
    //   method: 'POST',
    //   credentials: 'same-origin',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify({ bodyData }), // body data type must match "Content-Type" header
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     dispatch();
    //   })
    //   .catch((err) => console.error(err));

    return fakeFetch
      .then((fakeResponseObject) => {
        if (fakeResponseObject.status === 200) {
          console.log('Auth Details Save Success');
          dispatch(saveAuthDetailsSuccess());
        }
      })
      .catch((fakeResponseObject) => {
        console.log('Auth Details Save Error');
        dispatch(saveAuthDetailsFail());
      });
  };
};
