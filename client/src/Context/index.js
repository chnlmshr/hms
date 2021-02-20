import {
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
  logout,
} from "./actions";
import { AuthProvider, useAuthDispatch, useAuthState } from "./context";

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
  logout,
};
