// pages
import LandingPage from "../components/pages/LandingPage";
import AboutPage from "../components/pages/AboutPage";
import DashboardPage from "../components/pages/DashboardPage";
import UsersPage from "../components/pages/dashboard/admin/UsersPage";
import PropertyPage from "../components/pages/dashboard/admin/PropertyPage";
import AddPropertyPage from "../components/pages/dashboard/admin/AddPropertyPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import DisplayProfilePage from "../components/pages/dashboard/user/DisplayProfilePage";

// description of the keys within the object
// title - this is the name on the navbar header
// component - the pages that I want to load
// path - of were the route will go
// permissions - the permission allowed to access page
//   null - no permission needed
//   admin - only admin user can access
//   user - only normally users can access

/**
 * This helper file is used for all page routes
 * @type {[{path: string, component: JSX.Element, permissions: null, title: string},{path: string, component: JSX.Element, permissions: null, title: string},{path: string, component: JSX.Element, permissions: null, title: string},{path: string, component: JSX.Element, permissions: string, title: string},{path: string, component: JSX.Element, permissions: string, title: string},null,null]}
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
    path: "/dashboard/user/display-profile",
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
