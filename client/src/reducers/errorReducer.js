import {
  CLEAR_ERRORS,
  SET_TOKEN_ERROR,
  CLEAR_TOKEN_ERROR,
  SET_EMAIL_ERROR,
  CLEAR_EMAIL_ERROR,
  SET_PASSWORD_ERROR,
  CLEAR_PASSWORD_ERROR,
  SET_REGISTER_ERROR,
  CLEAR_REGISTER_ERROR,
  SET_LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
  SET_SERVER_ERROR,
  CLEAR_SERVER_ERROR,
} from "../actions/types";

// Error state format to go to store: [{msg:"", type:"<SOMETYPE>_ERROR"}, ...]
const initialState = [];

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case SET_TOKEN_ERROR:
    case SET_EMAIL_ERROR:
    case SET_PASSWORD_ERROR:
    case SET_REGISTER_ERROR:
    case SET_LOGIN_ERROR:
    case SET_SERVER_ERROR:
      return [
        ...state,
        { msg: action.payload.msg, type: formatErrorType(action) },
      ];
    case CLEAR_TOKEN_ERROR:
    case CLEAR_EMAIL_ERROR:
    case CLEAR_PASSWORD_ERROR:
    case CLEAR_REGISTER_ERROR:
    case CLEAR_LOGIN_ERROR:
    case CLEAR_SERVER_ERROR:
      return state.filter((err) => err.type !== formatErrorType(action));
    default:
      return state;
  }
};

const formatErrorType = ({ type }) => type.substr(4, type.length);
export default errorReducer;
