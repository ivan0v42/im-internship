import { root } from "./root/root.reducer";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userData } from "./userData/userData.reducer";
import { auth } from "./auth/auth.reducer";
import { errors } from "./errors/errors.reducer";
const rootReducer = combineReducers({
  root,
  userData,
  auth,
  errors,
  form: formReducer
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
