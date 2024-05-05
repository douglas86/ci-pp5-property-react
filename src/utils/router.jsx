import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import ContactPage from "../components/pages/ContactPage";
import NotFoundPage from "../components/pages/NotFoundPage";

export const router = [
  {
    title: "Home",
    icon: "",
    component: <HomePage />,
    path: "/",
  },
  {
    title: "About",
    icon: "",
    component: <AboutPage />,
    path: "/about",
  },
  {
    title: "Dashboard",
    icon: "",
    component: <DashboardPage />,
    path: "/dashboard",
  },
  {
    title: "Contact",
    icon: "",
    component: <ContactPage />,
    path: "/contact",
  },
  {
    title: "None",
    icon: "",
    component: <NotFoundPage />,
    path: "*",
  },
];
