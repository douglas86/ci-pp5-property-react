import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import UsersPage from "../components/pages/dashboard/admin/UsersPage";
import PropertyPage from "../components/pages/dashboard/admin/PropertyPage";
import AddPropertyPage from "../components/pages/dashboard/admin/AddPropertyPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import DisplayProfilePage from "../components/pages/dashboard/user/DisplayProfilePage";

/**
 * An array of objects representing routes in the application.
 *
 * Each object in the array represents a specific route and contains the following properties:
 *
 * @typedef {Object} Route
 * @property {string} title - The title of the route shown in the navigation bar.
 * @property {ReactComponent} component - The component to render when the route is active.
 * @property {string} path - The path of the route.
 * @property {string|null} permissions - The required permissions to access the route. Can be null if no permissions are required.
 * @property {string|null} IsAdmin - The path to the route when the user has admin permissions. Can be null if the route is not specific to admins.
 * @property {string|null} IsUser - The path to the route when the user has user permissions. Can be null if the route is not specific to users.
 */
export const router = [
  // links on Navbar
  {
    title: "Home",
    component: <LandingPage />,
    path: "/",
    permissions: null,
  },
  {
    title: "Dashboard",
    component: <DashboardPage />,
    permissions: "login",
    IsAdmin: "/dashboard/admin/users",
    IsUser: "/dashboard/user",
  },
  {
    title: "About",
    component: <AboutPage />,
    path: "/about",
    permissions: null,
  },
  // admin dashboard pages
  {
    title: "None",
    component: <UsersPage />,
    path: "/dashboard/admin/users",
    permissions: "admin",
  },
  {
    title: "None",
    component: <PropertyPage />,
    path: "/dashboard/admin/properties",
    permissions: "admin",
  },
  {
    title: "None",
    component: <AddPropertyPage />,
    path: "/dashboard/admin/add-new-property",
    permissions: "admin",
  },
  // user dashboard pages
  {
    title: "None",
    component: <DisplayProfilePage />,
    path: "/dashboard/user",
    permissions: "user",
  },
  // page not found
  {
    title: "None",
    component: <NotFoundPage />,
    path: "*",
    permissions: null,
  },
];
