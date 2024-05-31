// pages
import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import NotFoundPage from "../components/pages/NotFoundPage";

// components
import { fontawesomeIcon } from "../components/atom/Icons";

// assets
import Home from "../assets/images/Home.png";
import Dashboard from "../assets/images/Dashboard.png";
import Info from "../assets/images/Info.png";
import AdminUsersPages from "../components/pages/dashboard/AdminUsersPages";
import AdminPropertyPage from "../components/pages/dashboard/AdminPropertyPage";

export const router = [
  // links on Navbar
  {
    title: "Home",
    icon: fontawesomeIcon(Home),
    component: <LandingPage />,
    path: "/",
  },
  {
    title: "Dashboard",
    icon: fontawesomeIcon(Dashboard),
    component: <DashboardPage />,
    path: "/dashboard",
  },
  {
    title: "About",
    icon: fontawesomeIcon(Info),
    component: <AboutPage />,
    path: "/about",
  },
  // dashboard pages
  {
    title: "None",
    icon: "",
    component: <AdminUsersPages />,
    path: "/dashboard/admin/users",
  },
  {
    title: "None",
    icon: "",
    component: <AdminPropertyPage />,
    path: "/dashboard/adin/properties",
  },
  // path not found
  {
    title: "None",
    icon: "",
    component: <NotFoundPage />,
    path: "*",
  },
];
