const authAdminReducer = (state='', action) => {
  switch(action.type) {
    case "SET_INPUT_VAL":
      return {
        ...state,
        inputVal: action.inputVal
      }
    default:
    return state;
  }
}

export default authAdminReducer;
