import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProductPage from "../pages/Product";
import UserListPage from "../pages/User List";
import UserDetailPage from "../pages/User Detail";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

export const route = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/user-list",
    element: (
      <ProtectedRoute>
        <UserListPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/user-list/user-detail/:id",
    element: (
      <ProtectedRoute>
        <UserDetailPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
];
