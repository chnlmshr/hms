import { Home } from "../components/Home";
import { PatientDashboard, DoctorDashboard } from "../components/Dashboard";
import { PatientAccount, DoctorAccount } from "../components/Account";
import PageNotFound from "../components/NotFound";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { ChangePassword } from "../components/ChangePassword";
import { Reception } from "../components/Reception";

const routes = [
  {
    path: "/patient",
    component: PatientDashboard,
    type: "patient",
  },
  {
    path: "/doctor",
    component: DoctorDashboard,
    type: "doctor",
  },
  {
    path: "/patient/account",
    component: PatientAccount,
    type: "patient",
  },
  {
    path: "/reception",
    component: Reception,
    type: "patient",
  },
  {
    path: "/doctor/account",
    component: DoctorAccount,
    type: "doctor",
  },
  {
    path: "/patient/changepassword",
    component: ChangePassword,
    type: "patient",
  },
  {
    path: "/doctor/changepassword",
    component: ChangePassword,
    type: "doctor",
  },
  {
    path: "/",
    component: Home,
    type: "",
  },
  {
    path: "/login",
    component: Login,
    type: "",
  },
  {
    path: "/register",
    component: Register,
    type: "",
  },
  {
    path: "/*",
    component: PageNotFound,
    type: "",
  },
];

export default routes;
