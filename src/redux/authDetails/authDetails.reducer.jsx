const INITIAL_STATE = {
  inputVal: ''
}

const authDetailsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case"SET_TARGET_NODE":
      return {
        ...state,
        targetNode: action.payload
      }
    default:
    return state;
  }
}

export default authDetailsReducer;