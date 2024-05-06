// pages
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import SignInPage from "../components/pages/auth/SignInPage";
import NotFoundPage from "../components/pages/NotFoundPage";

export const router = [
  {
    title: "Home",
    icon: "",
    component: <HomePage />,
    path: "/",
  },
  {
    title: "Dashboard",
    icon: "",
    component: <DashboardPage />,
    path: "/dashboard",
  },
  {
    title: "About",
    icon: "",
    component: <AboutPage />,
    path: "/about",
  },
  {
    title: "Sign In",
    icon: "",
    component: <SignInPage />,
    path: "/sign-in",
  },
  {
    title: "None",
    icon: "",
    component: <NotFoundPage />,
    path: "*",
  },
];
