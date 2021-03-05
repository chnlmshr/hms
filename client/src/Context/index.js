import {
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
  logout,
  fetchDoctor,
  fetchPatient,
  changePassword,
  updateAccount
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
  updateAccount
};
