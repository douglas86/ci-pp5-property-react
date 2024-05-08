// pages
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import SignInPage from "../components/pages/auth/SignInPage";
import NotFoundPage from "../components/pages/NotFoundPage";

// components
import { fontawesomeIcon } from "../components/atom/Icons";

// assets
import Home from "../assets/images/Home.png";
import Dashboard from "../assets/images/Dashboard.png";
import Info from "../assets/images/Info.png";
import Enter from "../assets/images/Enter.png";
import RegisterPage from "../components/pages/auth/RegisterPage";

export const router = [
  {
    title: "Home",
    icon: fontawesomeIcon(Home),
    component: <HomePage />,
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
  {
    title: "Sign In",
    icon: fontawesomeIcon(Enter),
    component: <SignInPage />,
    path: "/sign-in",
  },
  {
    title: "None",
    icon: "",
    component: <RegisterPage />,
    path: "/register",
  },
  {
    title: "None",
    icon: "",
    component: <NotFoundPage />,
    path: "*",
  },
];
