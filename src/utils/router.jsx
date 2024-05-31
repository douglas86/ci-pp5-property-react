// pages
import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import AdminUsersPages from "../components/pages/dashboard/AdminUsersPages";
import AdminPropertyPage from "../components/pages/dashboard/AdminPropertyPage";

// components
import { fontawesomeIcon } from "../components/atom/Icons";

// assets
import Home from "../assets/images/Home.png";
import Dashboard from "../assets/images/Dashboard.png";
import Info from "../assets/images/Info.png";

// description of the keys within the object
// title - this is the name on the navbar header
// icon - the icon to be seen on the navbar - not in use yet
// component - the pages that I want to load
// path - of were the route will go

/**
 * This helper file is used for all page routes
 * @type {[{path: string, component: JSX.Element, icon: *, title: string},{path: string, component: JSX.Element, icon: *, title: string},{path: string, component: JSX.Element, icon: *, title: string},{path: string, component: JSX.Element, icon: string, title: string},{path: string, component: JSX.Element, icon: string, title: string},null]}
 */
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
  // admin dashboard pages
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
    path: "/dashboard/admin/properties",
  },
  // page not found
  {
    title: "None",
    icon: "",
    component: <NotFoundPage />,
    path: "*",
  },
];
