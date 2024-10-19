import React from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 1024 && setOpenNav(false));
  }, []);

  const navList = [
    {
      name: "Home",
      href: "/",
      icon: <ion-icon name="home"></ion-icon>,
    },

    {
      name: "About",
      href: "/about",
      icon: <ion-icon name="information-circle"></ion-icon>,
    },

    {
      name: "Product",
      href: "/product",
      icon: <ion-icon name="cube"></ion-icon>,
    },

    {
      name: "User List",
      href: "/user-list",
      icon: <ion-icon name="person"></ion-icon>,
    },
  ];

  const navigate = useNavigate();

  React.useEffect(() => {
    // Check if the token exists in localStorage on component mount
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set to true if a token exists, otherwise false
  }, []);

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      window.location.reload();
      navigate("/login");
    }, 3000);
  };

  return (
    <Navbar className="backdrop-blur-none shadow-none backdrop-saturate-100 bg-opacity-100 border-transparent max-w-screen-xl px-4 py-2 mx-auto lg:px-8 lg:py-4 bg-[#393E46] border-none rounded-none xl:rounded-b-xl text-[#f2f2f2] transition-all duration-300">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/">
          <div className="flex items-center justify-center w-[200px] cursor-pointer">
            <img src="/logo/dibisnisin-logo-color.png" alt="Logo" />
          </div>
        </a>

        <div className="hidden lg:block">
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {navList.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="flex items-center gap-x-2 text-[#f2f2f2] active:text-[#F96D00] focus:text-[#F96D00] transition-all duration-300 hover:text-[#F96D00]">
                  <span className="flex items-center">{item.icon}</span>

                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isAuthenticated ? (
          <div className="items-center hidden gap-x-4 lg:flex">
            <button
              onClick={handleLogout}
              className="flex items-center gap-x-2 text-[#f2f2f2] active:text-[#F96D00] focus:text-[#F96D00] transition-all duration-300 hover:text-[#F96D00]">
              <span className="flex items-center">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="items-center hidden gap-x-4 lg:flex">
            <Link
              to="/login"
              className="px-4 align-middle rounded-md text-[#f2f2f2] bg-transparent border-2 border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#393E46] text-center py-1 transition-all duration-300 uppercase text-xs font-bold">
              Log In
            </Link>

            <Link
              to="/register"
              className="px-4 align-middle rounded-md text-[#393E46] hover:bg-[#F96D00] border-2 border-[#f2f2f2] bg-[#f2f2f2] hover:text-[#f2f2f2] text-center py-1 transition-all duration-300 uppercase text-xs font-bold">
              Register
            </Link>
          </div>
        )}

        <div className="block lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <div className="flex items-center justify-center text-3xl text-[#f2f2f2] border-2 border-transparent p-1 rounded-md hover:border-[#f2f2f2]">
              <ion-icon name="close"></ion-icon>
            </div>
          ) : (
            <div className="flex items-center justify-center text-3xl text-[#f2f2f2] border-2 border-transparent p-1 rounded-md hover:border-[#f2f2f2]">
              <ion-icon name="menu"></ion-icon>
            </div>
          )}
        </div>
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList.map(({ name, href, icon }) => (
            <Link
              to={href}
              key={name}
              className="flex items-center gap-x-2 py-2 text-[#f2f2f2] border-b-2 border-[#f2f2f2] hover:text-[#F96D00] hover:border-[#F96D00] transition-all duration-300">
              {icon}
              <span>{name}</span>
            </Link>
          ))}

          {!isAuthenticated ? (
            <div className="flex items-center mt-8 mb-4 gap-x-4">
              <Link
                to="/login"
                className="w-full rounded-md text-[#f2f2f2] bg-transparent border-2 border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#393E46] text-center py-1 transition-all duration-300 uppercase text-sm font-bold">
                Log In
              </Link>

              <Link
                to="/register"
                className="w-full rounded-md text-[#393E46] hover:bg-[#F96D00] border-2 border-[#f2f2f2] bg-[#f2f2f2] hover:text-[#f2f2f2] text-center py-1 transition-all duration-300 uppercase text-sm font-bold">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center mt-4 mb-2 gap-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-x-2 text-[#f2f2f2] active:text-[#F96D00] focus:text-[#F96D00] transition-all duration-300 hover:text-[#F96D00]">
                <span className="flex items-center">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
}
