/* eslint-disable react/jsx-no-useless-fragment */
import { useRoutes } from "react-router-dom";
import { commonRoutes } from "./common";
import { publicRoutes } from "./public";
export const AppRoutes = () => {
  const routes = publicRoutes;

  const element = useRoutes([...commonRoutes, ...routes]);
  return <>{element}</>;
};
