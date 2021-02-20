import { Home } from "../components/Home";
import { PatientDashboard } from "../components/patient/Dashboard";
import { PatientAccount } from "../components/patient/Account";
import PageNotFound from "../components/NotFound";

const routes = [
  {
    path: "/patient",
    component: PatientDashboard,
    isPrivate: true,
  },
  {
    path: "/patient/account",
    component: PatientAccount,
    isPrivate: true,
  },
  {
    path: "/",
    component: Home,
    isPrivate: false,
  },
  {
    path: "/*",
    component: PageNotFound,
    isPrivate: true,
  },
];

export default routes;
