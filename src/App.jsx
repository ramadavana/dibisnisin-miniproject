import { useRoutes } from "react-router-dom";
import { route } from "./route";

export default function App() {
  const element = useRoutes(route);

  return element;
}
