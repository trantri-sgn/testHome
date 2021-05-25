import Home from "features/Home/Home";
import Count from "features/Count/Count";
import Table from "features/Table/Table";
import MainLayout from "../Layout/MainLayout";

const COMMON_ROUTES = [
  {
    path: "/",
    component: MainLayout,
    routers: [
     
      {
        path: "/count",
        component: Count,
        exact: true,
      },
      {
        path: "/table",
        component: Table,
        exact: true,
      },
      {
        path: "/",
        component: Home,
      },
    ],
  },
];
export default COMMON_ROUTES;
