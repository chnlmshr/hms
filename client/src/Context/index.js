import {
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
  logout,
  fetchDoctor,
  fetchPatient,
  changePassword,
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
  fetchDoctor,
  fetchPatient,
  changePassword,
};
