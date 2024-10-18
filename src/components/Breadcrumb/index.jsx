import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbsDefault() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs className="px-0 py-2 m-0 bg-transparent">
      <Link to="/" className="text-[#f2f2f2] hover:text-[#f96d00] transition-all duration-300">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span
            key={name}
            className="text-[#f2f2f2] hover:text-[#f96d00] transition-all duration-300">
            {name}
          </span>
        ) : (
          <Link
            to={routeTo}
            key={name}
            className="text-[#f2f2f2] hover:text-[#f96d00] transition-all duration-300">
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
