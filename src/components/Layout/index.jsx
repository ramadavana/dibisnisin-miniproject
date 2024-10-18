/* eslint-disable react/prop-types */
import NavbarDefault from "../Navbar";
import FooterWithSocialLinks from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavbarDefault />

      <main className="container flex flex-col max-w-screen-xl lg:p-8 p-4 mx-auto my-1 lg:my-16 xl:rounded-xl bg-[#393E46] gap-4 lg:gap-8">
        {children}
      </main>

      <FooterWithSocialLinks />
    </>
  );
}
